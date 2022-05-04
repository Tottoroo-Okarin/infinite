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
    <Card sx={{borderRadius: 0}} className={todo.completed ? styles['todo__status-completed'] : styles['todo__status-in-progress']}>
      <CardContent className={styles['todo__content']}>
        <div className={styles['todo__text-block']}>
          <Typography variant="h4">
            {todo.title}
          </Typography>
          <Typography paragraph>
            {todo.description}
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
