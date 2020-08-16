import {
  Category_category,
  Category_category_children,
  Category
} from '../../types/graphql-types'

export type CategoryChildrenType = Category_category_children;
export type CategoryDetailType = Category_category;
export type CategoryDetailResponseType = Category;

export type CategoryDetailStateType = {
  category: CategoryDetailType|null;
  loader: boolean;
  error: string|null;
}