import { createAction } from "@reduxjs/toolkit";
import { Todo } from "@features/todos/models";


const featureKey = '[Todos Collection]'

export const loadList = createAction(`${featureKey} Load List`);

export const add = createAction<Todo>(`${featureKey} Add Single`);

export const removeSingle = createAction<{id: string}>(`${featureKey} Remove Single`);

export const updateSingle = createAction<{id: string, todo: Partial<Todo>}>(`${featureKey} Update Single`);

export const removeMany = createAction<{ids: string[]}>(`${featureKey} Remove Many`)