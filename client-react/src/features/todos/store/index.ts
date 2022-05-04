import { combineReducers } from "@reduxjs/toolkit";
import todoModalsReducer from "./reducers/todo-modals.reducer";

export const todosReducer = combineReducers({
    modal: todoModalsReducer
})