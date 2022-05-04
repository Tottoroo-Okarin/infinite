import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { featuresReducer } from '../features/features-reducer';
import { dataReducer } from '../store/data-reducer';
import storeLogger from './middlewares/store-logger';

const rootReducer = combineReducers({
  data: dataReducer,
  features: featuresReducer
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => [...defaultMiddleware(), storeLogger]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
