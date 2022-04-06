import { RootState } from "../../app/store";
import { adapter } from "../reducers/todos-collection.reducer";



export const {selectAll: getAllTodos, } = adapter.getSelectors<RootState>(state => state.data.todos)
