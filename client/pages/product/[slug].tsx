import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { RootState } from '../../store/store'
import { isString } from '../../helpers'
import { http } from '../../http/http'
import { NextPage } from 'next'
import { Alert, Spinner } from 'react-bootstrap'
import { ProductStateType, ProductType } from '../../store/product/types'
import { fetchProductAsync, resetProduct, setProduct } from '../../store/product/actions'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

const ProductItem: NextPage<ProductStateType> = (serverProps) => {

  const dispatch = useDispatch();
  const { query } = useRouter();

  const { product, loader, error } = useSelector<RootState, ProductStateType>(state => {
    return state.product.product ? state.product : serverProps
  });

  useEffect(() => {
    if (!serverProps.product && isString(query.slug)) {
      dispatch(fetchProductAsync(query.slug));
    } else if (serverProps.product) {
      dispatch(setProduct(serverProps.product));
    }
    return function cleanup() {
      dispatch(resetProduct());
    }
  }, [query]);

  return (
    <Layout
      title={product?.title || ''}
      description={product?.description || ''}
      keywords={product?.keywords || ''}
    >
      {error ? <Alert variant={'danger'}>{error}</Alert> : null}

      {loader || !product ? <Spinner animation={'border'} /> : (
        <>
          <Breadcrumbs
            items={getBreadcrumbsLink(product)}
          />

          <h1 className="mb-4">{product.heading}</h1>

          <p>{product.content}</p>
        </>
      )}
    </Layout>
  )
}

ProductItem.getInitialProps = async ({ req, query }) => {
  const defaultProductState: ProductStateType = {
    product: null,
    loader: false,
    error: null
  };

  if (!req) {
    return {...defaultProductState}
  } else if (query.slug && isString(query.slug)) {
    try {
      const product = await http.productDetail(query.slug);
      return {...defaultProductState, product: product.product || null}
    } catch (e) {
       return {...defaultProductState, error: e.message, product: null}
    }
  }

  return {...defaultProductState};
}

const getBreadcrumbsLink = (product: ProductType) => {
  const breadcrumbs = [];

  product.categoryParents.forEach(({ slug, heading }) => breadcrumbs.push({
    linkProps: {
      href: '/category/[slug]',
      as: `/category/${slug}`
    },
    title: heading
  }));

  breadcrumbs.push({
    linkProps: {
      href: '/category/[slug]',
      as: `/category/${product.category.slug}`
    },
    title: product.category.heading
  });

  breadcrumbs.push(product.heading);

  return breadcrumbs;
}

export default ProductItem;