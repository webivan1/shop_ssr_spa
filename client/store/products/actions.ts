import { createAction } from '@reduxjs/toolkit'
import { ProductListPaginatorType, ProductListFilterType } from './types'
import { AppThunk } from '../store'
import { http } from '../../http/http'

export const setData = createAction<ProductListPaginatorType>('products/set-data');
export const appendData = createAction<ProductListPaginatorType>('products/set-data');
export const startFetching = createAction('products/start-fetching');
export const stopFetching = createAction('products/stop-fetching');
export const error = createAction<string>('products/error');

export const fetchProductListAsync = (filter: ProductListFilterType, append: boolean = false): AppThunk => async dispatch => {
  dispatch(startFetching());
  try {
    const products = await http.products(filter);
    if (products.products) {
      append ? dispatch(appendData(products.products)) : dispatch(setData(products.products));
    }
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(stopFetching())
  }
}
