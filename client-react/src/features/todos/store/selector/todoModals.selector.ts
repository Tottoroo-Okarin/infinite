import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";

const featuresStateSelector = (state: RootState) => state.features.todos.modal;

export const isOpen = createSelector(featuresStateSelector, state => state.isModalCardOpen)
export const todoBeingEdited = createSelector(featuresStateSelector, state => state.todoBeingEdited)