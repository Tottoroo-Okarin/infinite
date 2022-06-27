import { createEntityAdapter, createReducer, EntityState } from "@reduxjs/toolkit";

import { User } from "@features/todos/models";
import { UsersCollectionActions } from "../actions";

interface IState extends EntityState<User> {}

const usersCollectionAdapter = createEntityAdapter<User>({
  selectId: user => user.id,
});

const usersCollectionReducer = createReducer(usersCollectionAdapter.getInitialState(), builder => {
  builder.addCase(UsersCollectionActions.add, (state: IState, { payload }) =>
    usersCollectionAdapter.addOne(state, payload)
  );
  builder.addCase(UsersCollectionActions.removeSingle, (state: IState, { payload }) => 
    usersCollectionAdapter.removeOne(state, payload.id)
  );
  builder.addCase(UsersCollectionActions.removeMany, (state: IState, { payload }) =>
    usersCollectionAdapter.removeMany(state, payload.ids)
  );
  builder.addCase(UsersCollectionActions.updateSingle, (state: IState, { payload }) =>
    usersCollectionAdapter.updateOne(state, {id: payload.id, changes: {...payload.user}})
  );

});

export { usersCollectionReducer, usersCollectionAdapter };