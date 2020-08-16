import {
  ProductListPaginator_products,
  ProductListPaginator,
  ProductListPaginatorVariables
} from '../../types/graphql-types'

export type ProductListPaginatorType = ProductListPaginator_products;

export type ProductListStateType = ProductListPaginator_products & {
  loader: boolean;
  error: string|null;
}

export type ProductListFilterType = ProductListPaginatorVariables;

export type ProductListResponseType = ProductListPaginator;