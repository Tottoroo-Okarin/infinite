import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";

const featureStateSelector = (state: RootState) => state.todos.modal;

export const isOpen = createSelector(featureStateSelector, state => state.isModalCardAddOpen)