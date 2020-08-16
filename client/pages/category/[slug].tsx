import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { fetchCategoryDetailAsync, resetDetail, setState } from '../../store/category/actions'
import { RootState } from '../../store/store'
import { CategoryDetailStateType } from '../../store/category/types'
import { isString } from '../../helpers'
import { http } from '../../http/http'
import { NextPage } from 'next'
import { Alert, Spinner, Row, Col } from 'react-bootstrap'
import { CategoryChildren } from "../../components/Categories/CategoryChildren";
import { ProductList } from "../../components/Categories/Products/ProductList";

const CategoryItem: NextPage<CategoryDetailStateType> = (serverProps) => {

  const dispatch = useDispatch();
  const { query } = useRouter();

  const { category, loader, error } = useSelector<RootState, CategoryDetailStateType>(state => {
    return state.category.category ? state.category : serverProps
  });

  useEffect(() => {
    if (!serverProps.category && isString(query.slug)) {
      dispatch(fetchCategoryDetailAsync(query.slug));
    } else {
      dispatch(setState(serverProps));
    }
    return function cleanup() {
      dispatch(resetDetail());
    }
  }, [query]);

  return (
    <Layout
      title={category?.seo?.title || ''}
      description={category?.seo?.description || ''}
      keywords={category?.seo?.keywords || ''}
    >
      {error ? <Alert variant={'danger'}>{error}</Alert> : null}

      {loader || !category ? <Spinner animation={'grow'} /> : (
        <>
          <h1 className="mb-4">{category.heading}</h1>

          <p>{category.content}</p>

          <Row className="mt-5">
            <Col md={3} sm={6} xs={12}>
              {category.children ? <CategoryChildren children={category.children} /> : null}
            </Col>
            <Col md={9} sm={6} xs={12}>
              <ProductList />
            </Col>
          </Row>
        </>
      )}
    </Layout>
  )
}

CategoryItem.getInitialProps = async ({ req, query }) => {
  const defaultCategoryState: CategoryDetailStateType = {
    category: null,
    loader: false,
    error: null
  };

  if (!req) {
    return {...defaultCategoryState}
  } else if (query.slug && isString(query.slug)) {
    try {
      const category = await http.categoryDetail(query.slug);
      return {...defaultCategoryState, category: category?.category || null}
    } catch (e) {
       return {...defaultCategoryState, error: e.message, category: null}
    }
  }

  return {...defaultCategoryState};
}

export default CategoryItem;