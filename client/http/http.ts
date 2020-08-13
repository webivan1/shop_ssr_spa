import { client } from './client'

// Queries
import { CATEGORIES_LIST } from "../queries/categories/CategoriesQuery";
import { CATEGORY_DETAIL } from "../queries/category/CategoryQuery";

// Types
import { CategoryListType } from "../store/categories/types";
import { CategoryDetailResponseType } from "../store/category/types";

export const http = {
  categories: (): Promise<CategoryListType|undefined> =>
    client.query<CategoryListType>({ query: CATEGORIES_LIST }).then(({ data }) => data),
  categoryDetail: (slug: string): Promise<CategoryDetailResponseType|undefined> =>
    client.query({ query: CATEGORY_DETAIL, variables: { slug } }).then(({ data }) => data)
}