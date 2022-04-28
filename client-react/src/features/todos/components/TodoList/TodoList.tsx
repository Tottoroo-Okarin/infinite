import { Todo } from '../../models/todo.model';
import { TodoAction } from '../../models/todoAction.model';
import { TodoItem } from '../TodoItem/TodoItem';
import { Box, Button } from '@mui/material';
import { ActionTypes } from '@mui/base';
import { TodoActions } from '../TodoActions/TodoActions';
import { TodoModal } from '../TodoModal/TodoModal';
import { useAppSelector } from '../../../../app/hooks';
import { TodoSelectors } from '../../store/selector';

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
