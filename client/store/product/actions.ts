import { createAction } from '@reduxjs/toolkit'
import { ProductType } from './types'
import { AppThunk } from '../store'
import { http } from '../../http/http'

export const setProduct = createAction<ProductType>('product/set-item');
export const startFetching = createAction('product/start-fetching');
export const stopFetching = createAction('product/stop-fetching');
export const error = createAction<string>('product/error');
export const resetProduct = createAction('product/reset');

export const fetchProductAsync = (slug: string): AppThunk => async dispatch => {
  dispatch(startFetching());
  try {
    const product = await http.productDetail(slug);
    product.product
      ? dispatch(setProduct(product.product))
      : dispatch(error('Error 404 Page not found'));
  } catch (e) {
    dispatch(error(e.message));
  } finally {
    dispatch(stopFetching());
  }
};