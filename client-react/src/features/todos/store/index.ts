import { combineReducers } from "@reduxjs/toolkit";
import todoModalsReducer from "./reducers/todoModals.reducer";

export const todosReducer = combineReducers({
    modal: todoModalsReducer
})