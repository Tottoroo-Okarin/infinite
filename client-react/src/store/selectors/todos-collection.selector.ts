import { RootState } from "@app/store";
import { todosCollectionAdapter } from "@store/reducers";

export const {selectAll: getAllTodos, selectById: getTodoById, selectTotal: getTodosAmount } = todosCollectionAdapter.getSelectors<RootState>(state => state.data.todos);

