import {
  CategoryList_categories,
  CategoryList
} from '../../types/graphql-types'

export type CategoryItemType = CategoryList_categories & {
  children?: CategoryItemType[];
  visible: boolean;
}

export type CategoryListType = CategoryList & {
  categories: CategoryItemType[];
};

export type CategoryListStateType = {
  categories: CategoryItemType[];
  filterInput: string;
  loader: boolean;
  error: string|null;
}