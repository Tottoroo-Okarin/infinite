import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/store";


export const featuresReducer = combineReducers({
    todos: todosReducer,
});