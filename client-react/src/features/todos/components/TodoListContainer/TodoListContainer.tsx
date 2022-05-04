import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { TodosCollectionActions } from "../../../../store/actions"
import { TodosCollectionSelectors } from "../../../../store/selectors"
import { Todo } from "../../models/todo.model"
import { TodoAction } from "../../models/todoAction.model"
import { TodoList } from "../TodoList/TodoList"
import { v4 as uuidv4 } from 'uuid';
import { TodoListActions } from "../TodoListActions/TodoListActions"
import { Box } from "@mui/system"

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

  const toggleTodo = ({id, completed}: Todo) => {
    dispatch(TodosCollectionActions.updateSingle({ id: id, todo: {completed: !completed} }))
  }

  const addTodo = (name: string, description: string) => {
    if (name === '') return
    dispatch(TodosCollectionActions.add({ id: uuidv4(), title: name, description: description, completed: false }))
  }

  const clearCompletedTodos = () => {
    if (todos.length === 0) return
    const completedTodosIds = todos.filter(todo => todo.completed).map(todo => todo.id)
    dispatch(TodosCollectionActions.removeMany({ ids: completedTodosIds }))
  }


  const todoActions: Array<TodoAction> = [
    {
      title: 'Toggle Todo',
      action: toggleTodo
    }
  ]

  return (
    <Box alignItems="center" sx={{width: 900}}>
      <TodoList todos={todos} todoActions={todoActions}/>
      {(containerOptions.hasActions) && (
        <TodoListActions addTodo={addTodo} clearCompletedTodos={clearCompletedTodos}/>
      )} 
    </Box>
  )
}