import { Button } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { TodosCollectionActions } from "../../../../store/actions"
import { Todo } from "../../models/todo.model"
import { TodoAction } from "../../models/todoAction.model"
import { TodoModalsActions } from "../../store/actions"
import { TodoSelectors } from "../../store/selector"
import { TodoModal } from "../TodoModal/TodoModal"


interface TodoActionsProps {
  todo: Todo,
}

export const TodoActions = ({todo}: TodoActionsProps) => {
  const dispatch = useAppDispatch()

  const openEditModal = (todo: Todo) => {
    dispatch(TodoModalsActions.openTodoModal(todo))
  }

  const toggleTodo = ({id, completed}: Todo) => {
    dispatch(TodosCollectionActions.updateSingle({ id: id, todo: {completed: !completed} }))
  }

  const editTodo = true;

  return(
    <>
      {(editTodo) &&<Button onClick={() => openEditModal(todo)}>
        Edit Todo
      </Button>}
      {(toggleTodo) && <Button onClick={() => toggleTodo(todo)}>
        Toggle Todo
      </Button>}
    </>
  )
}