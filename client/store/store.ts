import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { middleware } from './middleware'
import reducer from './rootReducer'

export const store = configureStore({
  reducer,
  middleware
});

export type RootState = ReturnType<typeof reducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
