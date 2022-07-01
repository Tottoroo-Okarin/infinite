import { RootState } from "@app/store";
import { createSelector } from "@reduxjs/toolkit";
import { todosCollectionAdapter } from "@store/reducers";

export const {
    selectAll: getAllTodos,
    selectById: getTodoById,
    selectTotal: getTodosAmount 
} = todosCollectionAdapter.getSelectors<RootState>(state => state.data.todos);

export const getTodosByStatus = (statusId: number) => createSelector(getAllTodos, todos => todos.filter(todo => todo.statusId == statusId))


/*const selectItemsByCategory = createSelector(
    [
      // Usual first input - extract value from `state`
      state => state.items,
      // Take the second arg, `category`, and forward to the output selector
      (state, category) => category
    ],
    // Output selector gets (`items, category)` as args
    (items, category) => items.filter(item => item.category === category)
  );*/

/*type Return = (state: RootState) => string | undefined;

const selectOrganizationName = (id: string): Return =>
  createSelector(
    [(state: RootState) => organizationSelectors.selectById(state, id)],
    (organization) => organization?.name
  );*/