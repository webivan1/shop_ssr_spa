import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import * as action from './actions'
import { ProductListStateType, ProductListPaginatorType } from './types'

const initialState: ProductListStateType = {
  loader: false,
  error: null,
  data: [],
  paginatorInfo: {
    total: 0,
    perPage: 0,
    currentPage: 1
  }
}

export default createReducer(initialState, {
  [action.setData.type]: (state, { payload: { data, paginatorInfo } }: PayloadAction<ProductListPaginatorType>) => {
    state.data = data;
    state.paginatorInfo = paginatorInfo;
    state.error = null;
  },
  [action.appendData.type]: (state, { payload: { data, paginatorInfo } }: PayloadAction<ProductListPaginatorType>) => {
    state.data = state.data.concat(data);
    state.paginatorInfo = paginatorInfo;
    state.error = null;
  },
  [action.error.type]: (state, { payload }: PayloadAction<string>) => {
    state.error = payload;
  },
  [action.startFetching.type]: state => {
    state.loader = true;
  },
  [action.stopFetching.type]: state => {
    state.loader = false;
  }
});