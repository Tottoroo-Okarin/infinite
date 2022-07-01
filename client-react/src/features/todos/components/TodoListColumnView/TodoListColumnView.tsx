import { todoStatuses } from "@features/todos/constants/todo-statuses.const";
import { TodoStatusColumn } from "@features/todos/components"

import { Box } from "@mui/material"

interface TodoListColumnViewProps {
  children?: React.ReactNode;
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column'
};


export const TodoListColumnView = ({ children } : TodoListColumnViewProps) => {
  return(
    <>
      <Box sx={containerStyle}>
        {todoStatuses.map(status => {
          return(
            <TodoStatusColumn status={status}/>
          )
        })}
      </Box>
      <Box>
        {children}
      </Box>

    </>
  )
}