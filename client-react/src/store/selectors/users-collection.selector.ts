import { RootState } from "../../app/store";
import { adapter } from "../reducers/users-collection.reducer";



export const {selectAll: getAllUsers, selectById: getUserById, selectTotal: getUsersAmount } = adapter.getSelectors<RootState>(state => state.data.users);