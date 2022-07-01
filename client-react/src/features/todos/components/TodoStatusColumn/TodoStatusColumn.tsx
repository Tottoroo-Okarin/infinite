import { Todo } from "@features/todos/models";
import { Box } from "@mui/material"
import { 
  TodoItem,
  TodoActions
} from '@features/todos/components';
import { TodosCollectionSelectors } from "@store/selectors";
import { useAppSelector } from "@app/hooks";


interface Status {
  id: number,
  title: string
}

interface TodoStatusColumnProps {
  status: Status,
}

const style = {
  width: 300,
  mx: 2,
  height:'100%', 
  bgcolor: 'gray',
  display: 'flex',
  flexDirections: 'column'
};


export const TodoStatusColumn = ({status}: TodoStatusColumnProps) => {
  const todosByStatus = useAppSelector(TodosCollectionSelectors.getTodosByStatus(status.id))
  return(
    <>
      <Box sx={style}>
        <div>
          {status}
        </div>
        <Box>
        {todosByStatus.map(todo => {
          return (
            <TodoItem todo={todo}>
              <TodoActions todo={todo}/>
            </TodoItem>
          )
        })}
        </Box>
      </Box>
    </>
  )
}


