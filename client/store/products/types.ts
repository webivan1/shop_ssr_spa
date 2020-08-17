import {
  ProductListPaginator_products,
  ProductListPaginator,
  ProductListPaginatorVariables,
  ProductListPaginator_products_data
} from '../../types/graphql-types'

export type ProductListType = ProductListPaginator_products_data;
export type ProductListPaginatorType = ProductListPaginator_products;

export type ProductListStateType = ProductListPaginator_products & {
  loader: boolean;
  error: string|null;
}

export type ProductListFilterType = ProductListPaginatorVariables;

export type ProductListResponseType = ProductListPaginator;