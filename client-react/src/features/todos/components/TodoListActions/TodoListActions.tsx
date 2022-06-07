import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { UsersCollectionActions } from "../../../../store/actions";
import { User } from "../../models/user.model";
import { TodoModalsActions } from "../../store/actions";
import { TodoSelectors } from "../../store/selector";
import { TodoModal } from "../TodoModal/TodoModal";
import { v4 as uuidv4 } from 'uuid';


interface TodoListActionsProps {
  clearCompletedTodos: () => void;
}


export const TodoListActions = ({clearCompletedTodos}: TodoListActionsProps) => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(TodoSelectors.isOpen)

  const user1: User = {
    id: uuidv4(),
    firstName: 'User',
    lastName: 'One',
    profilePicture: 'whatever',
    roleId: 'role1',
    position: 'low'
  }

  const user2: User = {
    id: uuidv4(),
    firstName: 'User',
    lastName: 'Two',
    profilePicture: 'whatever',
    roleId: 'role1',
    position: 'mid'
  }

  const user3: User = {
    id: uuidv4(),
    firstName: 'User',
    lastName: 'Three',
    profilePicture: 'whatever',
    roleId: 'role2',
    position: 'high'
  }

  const openModal = () => {
    dispatch(TodoModalsActions.openTodoModal())
  }

  const addUsers = () => {
    dispatch(UsersCollectionActions.add(user1))
    dispatch(UsersCollectionActions.add(user2))
    dispatch(UsersCollectionActions.add(user3))
  }

  return(
    <>
      <Button onClick={() => openModal()}>
        Add Todo
      </Button>
      <Button onClick={() => clearCompletedTodos()}>
        Clear Completed Todos
      </Button> 
      <Button onClick={() => addUsers()}>
        Add users /test/
      </Button>
      <TodoModal isOpen={isOpen}/>
    </>
  )
}