import { combineReducers } from '@reduxjs/toolkit'

import categories from './categories/reducer'
import category from './category/reducer'

export default combineReducers({
  categories,
  category
});