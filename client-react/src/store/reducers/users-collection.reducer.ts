import { createEntityAdapter, createReducer, EntityState } from "@reduxjs/toolkit";

import { User } from "../../features/todos/models/user.model";
import { UsersCollectionActions } from "../actions";

interface IState extends EntityState<User> {}

export const adapter = createEntityAdapter<User>({
  selectId: user => user.id,
});

const usersCollectionReducer = createReducer(adapter.getInitialState(), builder => {
  builder.addCase(UsersCollectionActions.add, (state: IState, { payload }) =>
    adapter.addOne(state, payload)
  );
  builder.addCase(UsersCollectionActions.removeSingle, (state: IState, { payload }) => 
    adapter.removeOne(state, payload.id)
  );
  builder.addCase(UsersCollectionActions.removeMany, (state: IState, { payload }) =>
    adapter.removeMany(state, payload.ids)
  );
  builder.addCase(UsersCollectionActions.updateSingle, (state: IState, { payload }) =>
    adapter.updateOne(state, {id: payload.id, changes: {...payload.user}})
  );

});

export default usersCollectionReducer;