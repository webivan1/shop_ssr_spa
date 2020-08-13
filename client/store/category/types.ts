import {
  CategoryDetail_categoryDetail,
  CategoryDetail
} from '../../types/graphql-types'

export type CategoryDetailType = CategoryDetail_categoryDetail;
export type CategoryDetailResponseType = CategoryDetail;

export type CategoryDetailStateType = {
  category: CategoryDetailType|null;
  loader: boolean;
  error: string|null;
}