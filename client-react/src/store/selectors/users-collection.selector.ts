import { RootState } from "@/app/store";
import { usersCollectionAdapter } from "@store/reducers";



export const {selectAll: getAllUsers, } = usersCollectionAdapter.getSelectors<RootState>(state => state.data.users);