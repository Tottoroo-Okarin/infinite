import { Card } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@app/hooks"
import { TodosCollectionSelectors } from "@store/selectors"
import { Todo, User } from "@features/todos/models"
import classNames from 'classnames/bind';
import styles from './TodoDetailsContainer.module.scss' 
import { 
  TodoDetailsMetaInfo,
  TodoDetailsComments,
  TodoDetailsAttachments,
  TodoDetailsDescription,
  TodoDetailsHeader,
} from "@features/todos/components"
import { Error } from "@components/index"

interface TodoDetailsContainerOptions {
  hasActions?: boolean,
  columnsAmount?: number
}

interface TodoDetailsContainerProps {
  containerOptions: TodoDetailsContainerOptions
}

const testTodo: Todo = {
  id: 'test-todo-id',
  title: 'Test title',
  description: 'Test description displayed here. Test description displayed here.',
  completed: false,
  estimate: 7,
  assigneeId: 'test-assignee-id',
  assignedById: 'test-assigned-by-id',
  assignedOn: '2022-11-05 18:01:36.386',
  lastUpdatedOn: '2022-11-05 20:01:14.386',
  comments: []
}

const testAssignee: User = {
  id: 'test-assignee-id',
  firstName: 'AssigneeFirstName',
  lastName: 'AssigneeLastName',
  profilePicture: 'link-to-profile-pic',
  roleId: 'user-role-id',
  position: 'Junior Developer'
}

const testAssigner: User = {
  id: 'test-assigner-id',
  firstName: 'AssignerFirstName',
  lastName: 'AssignerLastName',
  profilePicture: 'link-to-profile-pic',
  roleId: 'user-role-id',
  position: 'Senior Developer'
}


const users: Array<User> = [testAssignee, testAssigner]

interface urlParams {
  id: string
}

const classes = classNames.bind(styles)

export const TodoDetailsContainer = ({containerOptions}: TodoDetailsContainerProps) => {
  const { id } = useParams<urlParams>();

  const todo = useAppSelector(state => TodosCollectionSelectors.getTodoById(state, id));
/**
 * Name, status
 * Originated by:, Assignee:, Assign myself
 * estimate
 * Created:, Last Updated:, last person assigned on:
 * 
 * Description
 * attachments
 * comments
 * 
 */
  
  const containerClasses = classes({
    container: true,
  })
  const mainContentClasses = classes({
    containerMainContent: true,
  })
  const metaContentClasses = classes({
    containerMetaContent: true,
  })
  const contentWrapperClasses = classes({
    containerContentWrapper: true,
  })

    if (todo) {
      return (
      <Card sx={{borderRadius: 0, width: 1000, heigth: 600 }} className={containerClasses}>
        <TodoDetailsHeader todo={todo}/>
        <div className={contentWrapperClasses}>
          <div className={mainContentClasses}>
            <TodoDetailsDescription todo={todo}/>
            <TodoDetailsAttachments todo={todo}/>
            <TodoDetailsComments todo={todo}/>
          </div>
          <div className={metaContentClasses}>
            <TodoDetailsMetaInfo todo={todo}/>
          </div>
        </div>
      </Card>
    )} else {
      return(
        <Error/>
      )
    }
}