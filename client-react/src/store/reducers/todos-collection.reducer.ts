import { createEntityAdapter, createReducer, EntityState } from "@reduxjs/toolkit";
import { Todo } from "../../features/todos/models/todo.model";
import { TodosCollectionActions } from "../actions";

interface IState extends EntityState<Todo> {}

const initialStateMockup = {
  entities: {
    'test-todo-id': {
      id: 'test-todo-id',
      title: 'Test title',
      description: 'Test description displayed here. Test description displayed here.',
      completed: false,
      estimate: 7,
      assigneeId: 'test-assignee-id',
      assignedById: 'test-assigned-by-id',
      assignedOn: '2022-11-05 18:01:36.386',
      lastUpdatedOn: '2022-11-05 20:01:14.386',
      comments: []
    }
  },
  ids: ['test-todo-id']
}

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