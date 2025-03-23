import { configureStore } from '@reduxjs/toolkit';
import { nordigenApi } from '../services/nordigenApi';
import { AuthenticationSlice } from './slices/AuthenticationSlice';
import { rememberReducer } from 'redux-remember';
import { ReduxRememberSlice } from './slices/ReduxRememberSlice';

// a slice is a collection of redux reducer logic and actions for a single feature in your app, typically defined together in a single
// The name "slice comes from splitting up the root Redux object into multiple slices of state"
const reducers = {
  [AuthenticationSlice.name]: AuthenticationSlice.reducer,
  [nordigenApi.reducerPath]: nordigenApi.reducer,
  [ReduxRememberSlice.name]: ReduxRememberSlice.reducer,
};

const persistAwareReducer = rememberReducer(reducers);

export const store = configureStore({
  reducer: persistAwareReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nordigenApi.middleware),
});

export type RootState = ReturnType<typeof persistAwareReducer>;
// this is used for redux-related typescript files (store, async thunks, middleware)
// Without AppDispatch, TypeScript may not correctly infer async thunks.

export type AppDispatch = typeof store.dispatch;
