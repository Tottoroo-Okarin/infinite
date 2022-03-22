import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../features/todos/models/todo.model";


const featureKey = '[Todos Collection]'

export const loadList = createAction(`${featureKey} Load List`);

export const add = createAction<Todo>(`${featureKey} Add`);

export const remove = createAction<{id: number}>(`${featureKey} Remove`);