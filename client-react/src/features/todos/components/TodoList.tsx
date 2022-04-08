import Tile from '../../../components/Tile/Tile';
import { Todo } from '../models/todo.model';
import { TodoAction } from '../models/todoAction.model';
import { TodoItem } from './TodoItem';
import { TodoActions } from './TodoActions';


interface TodoListProps {
  todos: Array<Todo>,
  todoActions?: Array<TodoAction>
}


export const TodoList = ({todos, todoActions}: TodoListProps) => {
  return(
    <div>
      {todos.map(todo => {
        return (
          <Tile>
            <Tile.Header>
              <h2>{todo.id}</h2>
            </Tile.Header>
            <Tile.Body>
              <TodoItem todo={todo}/>
            </Tile.Body>
            {
              (todoActions) && (
                <Tile.Actions>
                  <TodoActions todo={todo} todoActions={todoActions}/>
                </Tile.Actions>
              )
            }
          </Tile>        
        )
      })}
    </div>
  )
}
