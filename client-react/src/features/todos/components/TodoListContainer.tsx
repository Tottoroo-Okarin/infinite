import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import TileList from "../../../components/TileList/TileList"
import { TodosCollectionActions } from "../../../store/actions"
import { TodosCollectionSelectors } from "../../../store/selectors"
import { Todo } from "../models/todo.model"
import { TodoAction } from "../models/todoAction.model"
import { TodoList } from "./TodoList"
import { v4 as uuidv4 } from 'uuid';
import { TodoListActions } from "./TodoListActions"

export const TodoListContainer = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(TodosCollectionSelectors.getAllTodos)

  const toggleTodo = ({id, completed}: Todo) => {
    dispatch(TodosCollectionActions.updateSingle({ id: id, todo: {completed: !completed} }))
  }

  const addTodo = (name: string) => {
    if (name === '') return
    dispatch(TodosCollectionActions.add({ id: uuidv4(), title: name, completed: false }))
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
    <TileList>
      <TileList.Body>
        <TodoList todos={todos} todoActions={todoActions}/>
      </TileList.Body>
      <TileList.Actions>
        <TodoListActions addTodo={addTodo} clearCompletedTodos={clearCompletedTodos}/>
      </TileList.Actions>
    </TileList>
  )
}