import { useAppDispatch, useAppSelector } from "@app/hooks"
import { TodosCollectionActions } from "@store/actions"
import { TodosCollectionSelectors } from "@store/selectors"
import { 
  TodoList,
  TodoListActions,
  TodoModal
} from "@features/todos/components"
import { Box } from "@mui/system"
import { TodoSelectors } from "@features/todos/store/selectors"

interface TodoListContainerOptions {
  hasActions?: boolean,
  columnsAmount?: number
}


interface TodoListContainerProps {
  containerOptions: TodoListContainerOptions
}

export const TodoListContainer = ({containerOptions}: TodoListContainerProps) => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(TodosCollectionSelectors.getAllTodos)
  const isOpen = useAppSelector(TodoSelectors.isOpen)

  const clearCompletedTodos = () => {
    if (todos.length === 0) return
    const completedTodosIds = todos.filter(todo => todo.completed).map(todo => todo.id)
    dispatch(TodosCollectionActions.removeMany({ ids: completedTodosIds }))
  }

  return (
    <Box>
      <TodoList todos={todos}/>
      {(containerOptions.hasActions) && (
        <TodoListActions clearCompletedTodos={clearCompletedTodos}/>
      )}
      <TodoModal isOpen={isOpen}/> 
    </Box>
  )
}