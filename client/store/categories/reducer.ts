import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { CategoryListStateType, CategoryItemType } from './types'
import * as action from './actions'

const initialState: CategoryListStateType = {
  categories: [],
  filterInput: '',
  loader: false,
  error: null
};

export default createReducer(initialState, {
  [action.setList.type]: (state, { payload }: PayloadAction<CategoryItemType[]>) => {
    state.categories = payload.map(item => ({ ...item, visible: true }));
    state.error = null;
  },
  [action.filterCategory.type]: (state, { payload }: PayloadAction<string>) => {
    state.filterInput = payload;
    state.categories = state.categories.map(item => {
      const visible: boolean = item.heading.toLowerCase().indexOf(payload.toLowerCase()) !== -1;
      return {...item, visible};
    });
  },
  [action.startFetching.type]: (state) => {
    state.loader = true;
  },
  [action.stopFetching.type]: (state) => {
    state.loader = false;
  },
  [action.error.type]: (state, { payload }: PayloadAction<string>) => {
    state.error = payload;
  }
})