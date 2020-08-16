import { createAction } from '@reduxjs/toolkit'
import { CategoryItemType } from './types'
import { AppThunk } from '../store'
import { http } from '../../http/http'

export const setList = createAction<CategoryItemType[]>('categories/set-list');
export const startFetching = createAction('categories/start-fetching');
export const stopFetching = createAction('categories/stop-fetching');
export const error = createAction<string>('categories/error');
export const filterCategory = createAction<string>('categories/filter');

export const fetchAllCategoriesAsync = (): AppThunk => async (dispatch) => {
  dispatch(startFetching());
  try {
    const categories = await http.categories();
    categories && dispatch(setList(categories.categories));
  } catch (e) {
    dispatch(error(e.message));
  } finally {
    dispatch(stopFetching());
  }
}

// @todo optimize, to try https://www.npmjs.com/package/array-to-tree
export function categoryToTree(categories: CategoryItemType[], parent?: CategoryItemType): CategoryItemType[] {
  let tree: CategoryItemType[] = categories.filter(item => {
    if (parent) {
      return item.parent_id === +parent.id;
    } else {
      return !categories.some(({ id }) => +id === item.parent_id)
    }
  });

  tree = tree.map(item => {
    let children: CategoryItemType[] = [];

    if (categories.some(({ parent_id }) => parent_id === +item.id)) {
      children = categoryToTree(categories, item);
    }

    return {...item, children}
  });

  return tree;
}