import { createAction, createSlice } from '@reduxjs/toolkit';
import { REMEMBER_PERSISTED, REMEMBER_REHYDRATED } from 'redux-remember';

export interface ReduxRememberState {
  isRehydrated: boolean;
  isPersisted: boolean;
}

const initialState: ReduxRememberState = {
  isRehydrated: false,
  isPersisted: false,
};

export const ReduxRememberSlice = createSlice({
  name: 'reduxremember',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createAction(REMEMBER_REHYDRATED), (state) => {
        state.isRehydrated = true;
      })
      // Currently unused, added incase needed for the future
      .addCase(createAction(REMEMBER_PERSISTED), (state) => {
        state.isPersisted = true;
      }),
});
