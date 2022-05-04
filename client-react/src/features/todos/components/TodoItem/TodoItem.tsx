import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { Todo } from '../../models/todo.model';
import styles from './TodoItem.module.scss' 

interface TodoItemProps {
  todo: Todo,
  children?: React.ReactNode
}

export const TodoItem = ({todo, children}: TodoItemProps) => {
  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h4">
          {todo.title}
        </Typography>
        <Typography paragraph>
          {todo.description}
        </Typography>
        <Typography className={todo.completed ? styles['todo__status__completed'] : styles['todo__status__in-progress']}>
          {todo.completed ? 'Completed' : 'In Progress'}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions> 
    </Card>
    </>
  )
}
