import { Button, Box, Modal, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TodosCollectionActions } from "../../../../store/actions";
import { TodoInputs } from "../../models/todoInputs.model";
import { TodoModalsActions } from "../../store/actions";
import { v4 as uuidv4 } from 'uuid';
import styles from "./TodoModal.module.scss"
import { TodoSelectors } from "../../store/selector";
import { useEffect } from "react";



interface TodoModalProps {
  isOpen: boolean,
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

export const TodoModal = ({isOpen}: TodoModalProps) => {
  const todoBeingEdited = useAppSelector(TodoSelectors.todoBeingEdited)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoInputs>();
  const dispatch = useAppDispatch()

  const clearFormState: TodoInputs = {
    title: '',
    description: ''
  }

  useEffect(() => {
    reset(todoBeingEdited ? { title: todoBeingEdited.title, description: todoBeingEdited.description} : clearFormState);
  }, [reset, todoBeingEdited]);

  const closeModal = () => {
    dispatch(TodoModalsActions.closeTodoModal())
  } 
  
  const addTodo = (title: string, description: string) => {
    dispatch(TodosCollectionActions.add({ id: uuidv4(), title: title, description: description, completed: false }))
    closeModal();
  }
  
  const editTodo = (id: string, title: string, description: string) => {
    dispatch(TodosCollectionActions.updateSingle({id, todo: {title: title, description: description}}))
    closeModal();
  }
  
  const handleAddTodo = (data: TodoInputs) => {
    addTodo(data.title, data.description);
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
          <form className={styles['form']} onSubmit={handleSubmit(onClickSubmit)}>
            <Typography id="modal-modal-title" variant="h6">
              {header}
            </Typography>
            <TextField 
              className={styles['text-field']} 
              label="Name"  
              variant="standard" 
              {...register("title", { required: true })}
            />
            {errors.title && <span className={styles['validation-error']}>This field is required</span>}
            <TextField 
              className={styles['text-field']} 
              label="Description" 
              variant="standard" 
              multiline maxRows={4} 
              {...register("description", { required: true })}
            />  
            {errors.description && <span className={styles['validation-error']}>This field is required</span>}
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