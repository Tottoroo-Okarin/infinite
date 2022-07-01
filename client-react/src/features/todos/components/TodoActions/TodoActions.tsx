import { Button } from "@mui/material"
import { useAppDispatch } from "@app/hooks"
import { TodosCollectionActions } from "@store/actions"
import { Todo } from "@features/todos/models"
import { TodoModalsActions } from "@features/todos/store/actions"
import { push } from 'connected-react-router'

interface TodoActionsProps {
  todo: Todo,
}

export const TodoActions = ({todo}: TodoActionsProps) => {
  const dispatch = useAppDispatch()

  const openEditModal = (todo: Todo) => {
    dispatch(TodoModalsActions.openTodoModal(todo))
  }

  const toggleTodo = ({id, completed}: Todo) => {
    /*{
      title: 'Done',
      id: 5
    },
    {
      title: 'In Progress',
      id: 2
    },*/
    const statusId = completed ?  5 : 2
    dispatch(TodosCollectionActions.updateSingle({ id: id, todo: {completed: !completed, statusId} }))
  }

  const openTodoDetailsPage = (id: string) => {
    dispatch(push(`todos/details/${id}`))
  }

  const isEditTodoDisabled = false;
  const isToggleTodoDisabled = false;
  const isDetailsDisabled = false;


  return(
    <>
      {(!isEditTodoDisabled) &&<Button onClick={() => openEditModal(todo)}>
        Edit Todo
      </Button>}
      {(!isToggleTodoDisabled) && <Button onClick={() => toggleTodo(todo)}>
        Toggle Todo
      </Button>}
      {(!isDetailsDisabled) && <Button onClick={() => openTodoDetailsPage(todo.id)}>
        Details
      </Button>}
    </>
  )
}