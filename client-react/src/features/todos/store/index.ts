import { combineReducers } from "@reduxjs/toolkit";
import { todoModalsReducer } from "@features/todos/store/reducers";

export const todosReducer = combineReducers({
    modal: todoModalsReducer
})