import { Todo } from '@features/todos/models';
import { 
  TodoItem,
  TodoActions
} from '@features/todos/components';
import { Box } from '@mui/material';
interface TodoListProps {
  todos: Array<Todo>,
}


export const TodoList = ({todos}: TodoListProps) => {
  return(
    <Box
      sx={{
      display: 'grid',
      gap: 1,
      gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {todos.map(todo => {
        return (
          <TodoItem todo={todo}>
            <TodoActions todo={todo}/>
          </TodoItem>
        )
      })}
    </Box> 
  )
}
