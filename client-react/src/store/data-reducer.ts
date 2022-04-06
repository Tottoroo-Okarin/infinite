import { combineReducers } from "@reduxjs/toolkit";
import todosCollectionReducer from "./reducers/todos-collection.reducer";

export const dataReducer = combineReducers({
    todos: todosCollectionReducer
});