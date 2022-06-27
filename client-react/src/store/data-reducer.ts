import { combineReducers } from "@reduxjs/toolkit";
import { todosCollectionReducer, usersCollectionReducer }  from "@store/reducers";

export const dataReducer = combineReducers({
    todos: todosCollectionReducer,
    users: usersCollectionReducer
});