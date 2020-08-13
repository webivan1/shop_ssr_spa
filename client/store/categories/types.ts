import {
  Categories_categories
} from '../../types/graphql-types'

export type CategoryItemType = Categories_categories & {
  children?: CategoryItemType[];
  visible: boolean;
}

export type CategoryListType = {
  categories: CategoryItemType[];
}

export type CategoryListStateType = {
  categories: CategoryItemType[];
  filterInput: string;
  loader: boolean;
  error: string|null;
}