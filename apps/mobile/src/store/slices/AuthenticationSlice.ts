import { createSlice, Slice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticationTokenInfo {
  accessExpiresIn?: number;
  refreshExpiresIn?: number;
}

export interface AuthenticationState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenInfo: AuthenticationTokenInfo | null;
}

const initialState: AuthenticationState = {
  accessToken: null,
  refreshToken: null,
  tokenInfo: null,
};

export const AuthenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<AuthenticationState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenInfo = action.payload.tokenInfo;
    },
  },
});

export const { setTokens } = AuthenticationSlice.actions;
