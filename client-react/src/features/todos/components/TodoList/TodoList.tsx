import { Todo } from '../../models/todo.model';
import { TodoAction } from '../../models/todoAction.model';
import { TodoItem } from '../TodoItem/TodoItem';
import { Box, Button } from '@mui/material';

interface TodoListProps {
  todos: Array<Todo>,
  todoActions?: Array<TodoAction>
}


export const TodoList = ({todos, todoActions}: TodoListProps) => {
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
            { //slot with todo-specific actions
              (todoActions) &&
                (todoActions.map(entry => {
                  return (
                    <Button onClick={() => entry.action(todo)}>
                      {todo.completed ? 'Set In Progress' : 'Set Completed'}
                    </Button>
                  )
                })
              )
            }
          </TodoItem>
        )
      })}
    </Box>
  )
}
