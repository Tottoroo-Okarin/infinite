import { Todo } from "@features/todos/models";
import classNames from 'classnames/bind';
import styles from './TodoDetailsHeader.module.scss' 
import { Typography } from "@mui/material";

interface TodoDetailsHeaderProps {
  todo?: Todo,
}
const classes = classNames.bind(styles)
/**
 * 
 * Implementing new cool feature to lure-in investers
 * So basically we have nothing lmao just kidding maybe we will actually show something but idk if it will be good lol
 */
export const TodoDetailsHeader = ({todo}: TodoDetailsHeaderProps) => {  
  const headerStyles = classes({
    header: true,
  })
  const titleStyles = classes({
    headerTitle: true
  })
  const statusStyles = classes({
    headerStatus: true
  })

    return(
      <div className={headerStyles}>
        <Typography variant="h6" className={titleStyles}>
          {todo?.title}
        </Typography>
      </div>
    )
}