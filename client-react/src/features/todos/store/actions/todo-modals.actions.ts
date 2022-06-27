import { createAction } from "@reduxjs/toolkit";
import { Todo } from "@features/todos/models";


const featureKey = '[Add/Edit Todo]'

export const openTodoModal = createAction<Todo | undefined>(`${featureKey} Modal Open`);

export const closeTodoModal = createAction(`${featureKey} Modal Close`);