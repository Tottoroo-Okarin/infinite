import { createReducer } from "@reduxjs/toolkit";
import { Todo } from "../../models/todo.model";
import { TodoModalsActions } from "../actions";

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