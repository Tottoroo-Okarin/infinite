import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { featuresReducer } from '../features/features-reducer';
import { dataReducer } from '../store/data-reducer';
import storeLogger from './middlewares/store-logger';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  data: dataReducer,
  features: featuresReducer,
  router: connectRouter(history)
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => [...defaultMiddleware(), storeLogger, routerMiddleware(history)]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
