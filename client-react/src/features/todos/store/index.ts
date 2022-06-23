import { combineReducers } from "@reduxjs/toolkit";
import { TodoFeatureReducers } from "@features/todos/store/reducers";

export const todosReducer = combineReducers({
    modal: TodoFeatureReducers.todoModalsReducer
})