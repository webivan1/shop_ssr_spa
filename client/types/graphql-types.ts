

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Categories
// ====================================================

export interface Categories_categories {
  id: number;
  heading: string;
  slug: string;
  parent_id: number | null;
  depth: number | null;
  _lft: number;
  _rgt: number;
}

export interface Categories {
  categories: (Categories_categories | null)[] | null;  // A query
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryDetail
// ====================================================

export interface CategoryDetail_categoryDetail_seo {
  title: string | null;
  description: string | null;
  keywords: string | null;
}

export interface CategoryDetail_categoryDetail {
  id: number;
  heading: string;
  slug: string;
  content: string | null;
  seo: CategoryDetail_categoryDetail_seo | null;
  children?: CategoryDetail_categoryDetail[] | null
}

export interface CategoryDetail {
  categoryDetail: CategoryDetail_categoryDetail
}

export interface CategoryDetailVariables {
  id?: number | null;
  slug?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================