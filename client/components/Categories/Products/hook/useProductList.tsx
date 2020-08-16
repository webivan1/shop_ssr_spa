import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../../../store/store";
import { CategoryDetailStateType } from "../../../../store/category/types";
import { fetchProductListAsync } from "../../../../store/products/actions";
import { ProductListFilterType, ProductListStateType } from "../../../../store/products/types";

export const useProductList = () => {
  const dispatch = useDispatch();
  const { category } = useSelector<RootState, CategoryDetailStateType>(state => state.category);
  const products = useSelector<RootState, ProductListStateType>(state => state.products);

  useEffect(() => {
    category && dispatch(fetchProductListAsync({
      categoryId: +category.id
    }));
  }, [category])

  const handlerNextPage = (page: number, append: boolean = false): void => {
    category && dispatch(fetchProductListAsync({
      categoryId: +category.id,
      page
    }, append))
  }

  const handlerSearch = (filter: ProductListFilterType): void => {
    category && dispatch(fetchProductListAsync(filter))
  }

  return {
    ...products,
    handlerNextPage,
    handlerSearch
  }
}