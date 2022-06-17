import { Card, CardActions, CardContent, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { Todo } from '@features/todos/models';
import styles from './TodoItem.module.scss' 

interface TodoItemProps {
  todo: Todo,
  children?: React.ReactNode
}
/**
 * <Typography paragraph>
            {todo.description}
          </Typography>
 */
const classes = classNames.bind(styles)

export const TodoItem = ({todo, children}: TodoItemProps) => {

  const cardStyles = classes({
    todo: true,
    todoStatusCompleted: todo.completed,
    todoStatusInProgress: !todo.completed,
  })

  const cardContentStyles = classes({
    todoContent: true
  })

  const textBlockStyles = classes({
    todoContentTextBlock: true
  })

  return (
    <>
    <Card sx={{borderRadius: 0}} className={cardStyles}>
      <CardContent className={cardContentStyles}>
        <div className={textBlockStyles}>
          <Typography variant="h4">
            {todo.title}
          </Typography>
          <Typography>
            {todo.completed ? 'Completed' : 'In Progress'}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        {children}
      </CardActions> 
    </Card>
    </>
  )
}
