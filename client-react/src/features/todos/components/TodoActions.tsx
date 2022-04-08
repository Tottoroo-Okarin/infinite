import { Todo } from "../models/todo.model"
import { TodoAction } from "../models/todoAction.model"


interface TodoActionsProps {
  todo: Todo,
  todoActions?: Array<TodoAction>
}

export const TodoActions = ({todo, todoActions}: TodoActionsProps) => {
  return(
    <div>
      { 
        (todoActions) &&
        (todoActions.map(item => {
          return(
            <button onClick={() => item.action(todo)}>
              {item.title}
            </button>
          )
        }))
      }
    </div>
  )
}