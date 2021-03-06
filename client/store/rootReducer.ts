import { combineReducers } from '@reduxjs/toolkit'

import categories from './categories/reducer'
import category from './category/reducer'
import products from './products/reducer'
import product from './product/reducer'

export default combineReducers({
  categories,
  category,
  products,
  product
});