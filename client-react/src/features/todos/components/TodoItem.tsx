import { Todo } from '../models/todo.model';

interface TodoItemProps {
  todo: Todo,
}

export const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <div>
      <label>
        {todo.title}
        <input type="checkbox" checked={todo.completed}/>
      </label>
    </div>
  )
}
