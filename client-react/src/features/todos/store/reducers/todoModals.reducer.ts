import { createReducer } from "@reduxjs/toolkit";
import { TodoModalsActions } from "../actions";

const initialState = {
  isModalCardAddOpen: false,
  editedTodoId: ''
} 

const todoModalsReducer = createReducer(initialState, (builder) => {
  builder.addCase(TodoModalsActions.openAddTodoModal, (state) => {
    state.isModalCardAddOpen = true
  });
  builder.addCase(TodoModalsActions.closeAddTodoModal, (state) => {
    state.isModalCardAddOpen = false
  })
});

export default todoModalsReducer;