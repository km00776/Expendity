import { configureStore } from "@reduxjs/toolkit";

// a slice is a collection of redux reducer logic and actions for a single feature in your app, typically defined together in a single
// The name "slice comes from splitting up the root Redux object into multiple slices of state"
export const store = configureStore({
    reducer: {}
})

export type RootState = ReturnType<typeof store.getState>
// this is used for redux-related typescript files (store, async thunks, middleware)
// Without AppDispatch, TypeScript may not correctly infer async thunks.


export type AppDispatch = typeof store.dispatch;
