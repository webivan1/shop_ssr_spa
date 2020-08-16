import { client } from './client'

// Queries
import { CATEGORIES_LIST } from "../queries/categories/CategoriesQuery";
import { CATEGORY_DETAIL } from "../queries/category/CategoryQuery";
import { PRODUCT_LIST } from "../queries/products/ProductsQuery";

// Types
import { CategoryListType } from "../store/categories/types";
import { CategoryDetailResponseType } from "../store/category/types";
import { ProductListResponseType, ProductListFilterType } from "../store/products/types";

export const http = {
  categories: (): Promise<CategoryListType|undefined> =>
    client.query<CategoryListType>({ query: CATEGORIES_LIST }).then(({ data }) => data),
  categoryDetail: (slug: string): Promise<CategoryDetailResponseType|undefined> =>
    client.query({ query: CATEGORY_DETAIL, variables: { slug } }).then(({ data }) => data),
  products: (variables: ProductListFilterType): Promise<ProductListResponseType> =>
    client.query({ query: PRODUCT_LIST, variables }).then(({ data }) => data),
}