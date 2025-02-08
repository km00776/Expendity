import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * This customizes createAsyncThunk with TypeScript types, making sure that all async thunks in your app:
 * Have access to RootState (Redux state).
 * Use a strongly-typed dispatch (AppDispatch).
 * Return a rejected value of type string (when an error occurs).
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{state: RootState; dispatch: AppDispatch; rejectValue: string;}>();
  