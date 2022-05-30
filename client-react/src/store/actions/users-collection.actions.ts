import { createAction } from "@reduxjs/toolkit";
import { User } from "../../features/todos/models/user.model";


const featureKey = '[Users Collection]'

export const loadUsers = createAction(`${featureKey} Load Users`);

export const add = createAction<User>(`${featureKey} Add Single`);

export const removeSingle = createAction<{id: string}>(`${featureKey} Remove Single`);

export const updateSingle = createAction<{id: string, user: Partial<User>}>(`${featureKey} Update Single`);

export const removeMany = createAction<{ids: string[]}>(`${featureKey} Remove Many`)
