import { createAction } from '@reduxjs/toolkit'
import { CategoryDetailStateType, CategoryDetailType } from './types'
import { AppThunk } from '../store'
import { http } from '../../http/http'

export const setState = createAction<CategoryDetailStateType>('category/set-state');
export const setCategory = createAction<CategoryDetailType>('category-detail/set');
export const startFetching = createAction('category-detail/start-fetching');
export const stopFetching = createAction('category-detail/stop-fetching');
export const error = createAction<string>('category-detail/error');
export const resetDetail = createAction('category-detail/reset');

export const fetchCategoryDetailAsync = (slug: string): AppThunk => async (dispatch) => {
  dispatch(stopFetching())
  try {
    const category = await http.categoryDetail(slug);
    category.category
      ? dispatch(setCategory(category.category))
      : dispatch(error('404 Page not found'));
  } catch (e) {
    dispatch(error(e.message));
  } finally {
    dispatch(stopFetching())
  }
}