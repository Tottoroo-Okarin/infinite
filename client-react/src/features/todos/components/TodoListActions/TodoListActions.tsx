import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TodoModalsActions } from "../../store/actions";
import { TodoSelectors } from "../../store/selector";
import styles from "./TodoListActions.module.scss"




interface TodoListActionsProps {
  addTodo: (name: string, description: string) => void;
  clearCompletedTodos: () => void;
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

interface Inputs {
  name: string,
  description: string,
};

  
export const TodoListActions = ({addTodo, clearCompletedTodos}: TodoListActionsProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();


  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(TodoSelectors.isOpen)

  const openModal = () => {
    dispatch(TodoModalsActions.openAddTodoModal())
  }

  const closeModal = () => {
    dispatch(TodoModalsActions.closeAddTodoModal())
  }

  const onSubmit = (data: Inputs) => {
    addTodo(data.name, data.description);
    closeModal();
  }

  return(
    <>
      <Button onClick={() => openModal()}>
        Add Todo
      </Button>
      <Button onClick={() => clearCompletedTodos()}>
        Clear Completed Todos
      </Button> 
      <Modal open={isOpen}>
        <Box sx={style}>
          <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
            <Typography id="modal-modal-title" variant="h6">
              Add new Todo
            </Typography>
            <TextField className={styles['text-field']} label="Name" variant="standard" {...register("name", { required: true })} />
            {errors.name && <span className={styles['validation-error']}>This field is required</span>}
            <TextField className={styles['text-field']} label="Description" variant="standard" multiline maxRows={4} {...register("description", { required: true })} />  
            {errors.description && <span className={styles['validation-error']}>This field is required</span>}
            <div>
              <Button type="submit">
                Add
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