import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import * as action from './actions'
import { ProductStateType, ProductType } from './types'

const initialState: ProductStateType = {
  product: null,
  loader: false,
  error: null
}

export default createReducer(initialState, {
  [action.setProduct.type]: (state, { payload }: PayloadAction<ProductType>) => {
    state.error = null;
    state.product = payload;
  },
  [action.startFetching.type]: (state) => {
    state.loader = true;
  },
  [action.stopFetching.type]: (state) => {
    state.loader = false;
  },
  [action.error.type]: (state, { payload }: PayloadAction<string>) => {
    state.error = payload;
  },
  [action.resetProduct.type]: (state) => {
    state.product = null;
    state.error = null;
    state.loader = false;
  },
});