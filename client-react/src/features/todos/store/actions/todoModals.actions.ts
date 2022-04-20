import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/todo.model";


const featureKey = '[Modals]'

export const openAddTodoModal = createAction(`${featureKey} Open Add Todo Modal`);

export const closeAddTodoModal = createAction(`${featureKey} Close Add Todo Modal`);

export const openEditTodoModal = createAction<{id: string, todo: Partial<Todo>}>(`${featureKey} Open Edit Todo Modal`);

export const closeEditTodoModal = createAction<{id: string, todo: Partial<Todo>}>(`${featureKey} Close Add Todo Modal`);