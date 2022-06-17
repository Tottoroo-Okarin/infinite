import { createReducer } from "@reduxjs/toolkit";
import { Todo } from "@features/todos/models";
import { TodoModalsActions } from "@features/todos/store/actions";

interface State {
  isModalCardOpen: boolean,
  todoBeingEdited?: Todo
}

const initialState: State = {
  isModalCardOpen: false,
  todoBeingEdited: undefined
} 

const todoModalsReducer = createReducer<State>(initialState, (builder) => {
  builder
    .addCase(TodoModalsActions.openTodoModal, (state, { payload }) => 
      ({...state, isModalCardOpen: true, todoBeingEdited: payload}))
    .addCase(TodoModalsActions.closeTodoModal, (state) => 
      ({...state, isModalCardOpen: false, todoBeingEdited: undefined}))
});

export default todoModalsReducer;