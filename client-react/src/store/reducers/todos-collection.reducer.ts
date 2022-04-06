import { createEntityAdapter, createReducer, EntityState } from "@reduxjs/toolkit";
import { Todo } from "../../features/todos/models/todo.model";
import { TodosCollectionActions } from "../actions";

interface IState extends EntityState<Todo> {}

export const adapter = createEntityAdapter<Todo>({
  selectId: todo => todo.id,
});

const todosCollectionReducer = createReducer(adapter.getInitialState(), builder => {
  builder.addCase(TodosCollectionActions.add, (state: IState, { payload }) =>
    adapter.addOne(state, payload)
  );
  builder.addCase(TodosCollectionActions.removeSingle, (state: IState, { payload }) => 
    adapter.removeOne(state, payload.id)
  );
  builder.addCase(TodosCollectionActions.removeMany, (state: IState, { payload }) =>
    adapter.removeMany(state, payload.ids)
  );
  builder.addCase(TodosCollectionActions.updateSingle, (state: IState, { payload }) =>
    adapter.updateOne(state, {id: payload.id, changes: {...payload.todo}})
  );

});

export default todosCollectionReducer;