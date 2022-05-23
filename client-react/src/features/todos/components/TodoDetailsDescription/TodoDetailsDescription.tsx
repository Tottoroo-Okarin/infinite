import { Typography } from "@mui/material";
import { Todo } from "../../models/todo.model";

interface TodoDetailsDescription {
    todo?: Todo,
  }

export const TodoDetailsDescription = ({todo}: TodoDetailsDescription) => {
  return(
    <div className="">
      <Typography variant="h6">
        Description:
      </Typography>
      <Typography paragraph>
        {todo?.description}
      </Typography>
    </div>
  )

}