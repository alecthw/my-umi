import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import globalReducer from './globalSlice';

interface AppStore extends EnhancedStore {
  asyncReducers: ReducersMapObject<any, Action>;
  injectReducer: any;
}

const staticReducers: ReducersMapObject<any, Action> = {
  global: globalReducer,
};

function createReducer(asyncReducers: ReducersMapObject<any, Action>) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const store = configureStore({
  reducer: staticReducers,
}) as AppStore;

// Add a dictionary to keep track of the registered async reducers
store.asyncReducers = {};

// Create an inject reducer function
// This function adds the async reducer, and creates a new combined reducer
store.injectReducer = (key: any, asyncReducer: Reducer<any, Action>) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
