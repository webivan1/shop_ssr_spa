import {
  Product,
  Product_product
} from '../../types/graphql-types'

export type ProductType = Product_product;
export type ProductResponseType = Product;

export type ProductStateType = {
  product: ProductType|null;
  loader: boolean;
  error: string|null;
}