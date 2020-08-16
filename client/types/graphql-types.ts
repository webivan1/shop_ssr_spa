

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryList
// ====================================================

export interface CategoryList_categories {
  id: string;
  heading: string | null;
  slug: string | null;
  parent_id: number | null;
  depth: number | null;
  _lft: number | null;
  _rgt: number | null;
}

export interface CategoryList {
  categories: CategoryList_categories[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Category
// ====================================================

export interface Category_category_seo {
  title: string;
  description: string | null;
  keywords: string | null;
}

export interface Category_category_children {
  id: string;
  heading: string | null;
  slug: string | null;
}

export interface Category_category {
  id: string;
  heading: string | null;
  slug: string | null;
  content: string | null;
  seo: Category_category_seo | null;
  children: Category_category_children[] | null;
}

export interface Category {
  category: Category_category | null;
}

export interface CategoryVariables {
  slug: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductListPaginator
// ====================================================

export interface ProductListPaginator_products_data_category {
  heading: string | null;
}

export interface ProductListPaginator_products_data {
  id: string;
  heading: string | null;
  slug: string | null;
  price: number | null;
  price_old: number | null;
  category: ProductListPaginator_products_data_category | null;
}

export interface ProductListPaginator_products_paginatorInfo {
  total: number;        // Total items available in the collection.
  perPage: number;      // Number of items per page in the collection.
  currentPage: number;  // Current pagination page.
}

export interface ProductListPaginator_products {
  data: ProductListPaginator_products_data[];                  // A list of ProductList items.
  paginatorInfo: ProductListPaginator_products_paginatorInfo;  // Pagination information about the list of items.
}

export interface ProductListPaginator {
  products: ProductListPaginator_products | null;
}

export interface ProductListPaginatorVariables {
  categoryId: number;
  priceFrom?: number | null;
  priceTo?: number | null;
  search?: string | null;
  first?: number | null;
  page?: number | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================