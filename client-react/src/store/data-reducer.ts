import { combineReducers } from "@reduxjs/toolkit";
import todosCollectionReducer from "./reducers/todos-collection.reducer";
import usersCollectionReducer from "./reducers/users-collection.reducer";

export const dataReducer = combineReducers({
    todos: todosCollectionReducer,
    users: usersCollectionReducer
});