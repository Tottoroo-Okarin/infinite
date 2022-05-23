import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Todo } from "../../features/todos/models/todo.model";
import { adapter } from "../reducers/todos-collection.reducer";

export const {selectAll: getAllTodos, selectById: getTodoById, selectTotal: getTodosAmount } = adapter.getSelectors<RootState>(state => state.data.todos);

