import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { TodoModalsActions } from "@features/todos/store/actions";
import { TodoSelectors } from "@/features/todos/store/selectors";
import { TodoModal } from "@features/todos/components";


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