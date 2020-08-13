import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDetailStateType, CategoryDetailType } from './types'
import * as action from './actions'

const initialState: CategoryDetailStateType = {
  category: null,
  loader: false,
  error: null
}

export default createReducer(initialState, {
  [action.setState.type]: (state, { payload: { category, loader, error } }: PayloadAction<CategoryDetailStateType>) => {
    state.category = category;
    state.loader = loader;
    state.error = error;
  },
  [action.setCategory.type]: (state, action: PayloadAction<CategoryDetailType>) => {
    state.category = action.payload;
    state.error = null;
  },
  [action.startFetching.type]: (state) => {
    state.loader = true;
  },
  [action.stopFetching.type]: (state) => {
    state.loader = false;
  },
  [action.error.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
  [action.resetDetail.type]: (state) => {
    state.category = null;
    state.error = null;
    state.loader = false;
  }
});
