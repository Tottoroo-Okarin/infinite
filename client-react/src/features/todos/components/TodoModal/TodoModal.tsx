import { Button, Box, Modal, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { TodosCollectionActions } from "@store/actions";
import { TodoInputs } from "@features/todos/models";
import { TodoModalsActions } from "@features/todos/store/actions";
import { todoStatuses } from "@features/todos/constants/todo-statuses.const";
import { v4 as uuidv4 } from 'uuid';
import styles from "./TodoModal.module.scss"
import { TodoSelectors } from "@features/todos/store/selectors";
import { useEffect } from "react";
import classNames from "classnames/bind";



interface TodoModalProps {
  isOpen: boolean,
}

const clearFormState: TodoInputs = {
  title: '',
  description: '',
  estimate: null,
  statusId: 0,
  assigneeId: ''
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const classes = classNames.bind(styles)

export const TodoModal = ({isOpen}: TodoModalProps) => {

  const formStyles = classes({
    form: true
  })

  const textFieldStyles = classes({
    textField: true
  })

  const validationStyles = classes({
    validationError: true
  })

  const todoBeingEdited = useAppSelector(TodoSelectors.todoBeingEdited)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoInputs>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    reset(todoBeingEdited ? { title: todoBeingEdited.title, description: todoBeingEdited.description} : clearFormState);
  }, [reset, todoBeingEdited]);

  const closeModal = () => {
    dispatch(TodoModalsActions.closeTodoModal())
  } 
  
  const addTodo = (title: string, description: string, estimate: number, assigneeId: string, statusId: number) => {
    dispatch(TodosCollectionActions.add(
      { id: uuidv4(), title, description,
        completed: false, statusId, estimate, assignedById: 'My id', assigneeId,
        assignedOn: 'Monday, April 23rd, 2022',  lastUpdatedOn: 'now', comments: []
      }))
    closeModal();
  }
  
  const editTodo = (id: string, title: string, description: string) => {
    dispatch(TodosCollectionActions.updateSingle({id, todo: {title, description}}))
    closeModal();
  }
  
  const handleAddTodo = (data: TodoInputs) => {
    addTodo(data.title, data.description, +data.estimate!, data.assigneeId, +data.statusId);
  }

  const handleEditTodo = (data: TodoInputs) => {
    editTodo(todoBeingEdited!.id, data.title, data.description)
  }
  
  const submitButtonTitle = todoBeingEdited ? 'Commit Changes' : 'Add'
  const header = todoBeingEdited ? 'Edit Todo' : 'Add new Todo'
  const onClickSubmit = todoBeingEdited ? handleEditTodo : handleAddTodo;
  /*
  const prepopulatedTitle = todoBeingEdited ? todoBeingEdited.title : '';
  const prepopulatedDescription = todoBeingEdited ? todoBeingEdited.description : '';*/



  return(
    <>
      <Modal open={isOpen}>
        <Box sx={style}>
          <form className={formStyles} onSubmit={handleSubmit(onClickSubmit)}>
            <Typography id="modal-modal-title" variant="h6">
              {header}
            </Typography>
            <TextField 
              className={textFieldStyles} 
              label="Name"  
              variant="standard" 
              {...register("title", { required: true })}
            />
            {errors.title && <span className={validationStyles}>This field is required</span>}
            <TextField 
              className={textFieldStyles} 
              label="Description" 
              variant="standard" 
              multiline maxRows={4} 
              {...register("description", { required: true })}
            />  
            {errors.description && <span className={validationStyles}>This field is required</span>}
            <TextField 
              className={textFieldStyles} 
              label="Estimate"  
              variant="standard" 
              {...register("estimate", { required: true })}
            />
            {errors.title && <span className={validationStyles}>This field is required</span>}
            <TextField 
              className={textFieldStyles} 
              label="Assignee"  
              variant="standard" 
              {...register("assigneeId", { required: true })}
            />
            {errors.title && <span className={validationStyles}>This field is required</span>}
            <FormControl>
              <InputLabel>Status</InputLabel>
              <Select
                className={textFieldStyles}
                labelId="label"
                {...register("statusId")}
              >
                {
                  (todoStatuses.length === 0) &&
                    <MenuItem>
                      No data available
                    </MenuItem>
                }
                {
                  todoStatuses.map(status => {
                    return(
                      <MenuItem value={status.id}>
                        {status.title}
                      </MenuItem>
                    )
                  })
                }
            </Select>
            </FormControl>
            <div>
              <Button type="submit">
                {submitButtonTitle}
              </Button>
              <Button onClick={() => closeModal()}>
                Close
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}