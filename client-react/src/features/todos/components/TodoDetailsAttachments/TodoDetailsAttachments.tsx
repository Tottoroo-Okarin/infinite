import { Typography } from "@mui/material";
import { Todo } from "../../models/todo.model";

interface TodoDetailsAttachments{
    todo?: Todo,
  }

export const TodoDetailsAttachments = ({todo}: TodoDetailsAttachments) => {
  return(
    <div>
      <Typography variant="h6">
        Attachments:
      </Typography>
      <div>
          PLACEHOLDER FOR ATTACHMENTS
      </div>
    </div>
  )
}