import { Typography } from "@mui/material";
import { Todo } from "@features/todos/models";

interface TodoDetailsComments {
    todo?: Todo,
  }

export const TodoDetailsComments = ({todo}: TodoDetailsComments) => {
  return(
    <div>
      <Typography variant="h6">
        Comments:
      </Typography>
      <div>
          PLACEHOLDER FOR COMMENTS
      </div>
    </div>
  )

}