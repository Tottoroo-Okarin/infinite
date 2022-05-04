import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { TodoModalsActions } from "../../store/actions";
import { TodoSelectors } from "../../store/selector";
import { TodoModal } from "../TodoModal/TodoModal";


interface TodoListActionsProps {
  clearCompletedTodos: () => void;
}


export const TodoListActions = ({clearCompletedTodos}: TodoListActionsProps) => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(TodoSelectors.isOpen)

  const openModal = () => {
    dispatch(TodoModalsActions.openTodoModal())
  }

  return(
    <>
      <Button onClick={() => openModal()}>
        Add Todo
      </Button>
      <Button onClick={() => clearCompletedTodos()}>
        Clear Completed Todos
      </Button> 
      <TodoModal isOpen={isOpen}/>
    </>
  )
}