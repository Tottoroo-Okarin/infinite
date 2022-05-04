import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { TodosCollectionActions } from "../../../../store/actions"
import { TodosCollectionSelectors } from "../../../../store/selectors"
import { TodoList } from "../TodoList/TodoList"
import { TodoListActions } from "../TodoListActions/TodoListActions"
import { Box } from "@mui/system"
import { TodoSelectors } from "../../store/selector"
import { TodoModal } from "../TodoModal/TodoModal"

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
    <Box alignItems="center" sx={{width: 900}}>
      <TodoList todos={todos}/>
      {(containerOptions.hasActions) && (
        <TodoListActions clearCompletedTodos={clearCompletedTodos}/>
      )}
      <TodoModal isOpen={isOpen}/> 
    </Box>
  )
}