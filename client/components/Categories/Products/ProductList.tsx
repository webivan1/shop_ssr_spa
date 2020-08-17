import { FC } from 'react'
import { useProductList } from './hook/useProductList'
import { Alert, Spinner, Row, Col } from 'react-bootstrap'
import { PaginationButtons } from '../../Pagination/PaginationButtons'
import { Product } from './Product'

export const ProductList: FC = () => {

  const {
    error, paginatorInfo, data, loader, category, handlerNextPage, handlerSearch
  } = useProductList();

  if (!data.length && loader) {
    return <Spinner animation={'grow'} />
  } else if (!data.length) {
    return <Alert variant={'warning'}>Products not found</Alert>
  }

  if (error) {
    return <Alert variant={'warning'}>{error}</Alert>
  }

  return (
    <Row>
      <Col xs={12}>
        <div className="d-flex justify-content-between">
          <p>Total: {paginatorInfo.total}</p>
          {loader ? <Spinner animation={'grow'} /> : null}
        </div>
      </Col>

      {category ? data.map(product => (
        <Col key={product.id} md={4} sm={6} xs={1} className={'mb-4'}>
          <Product category={category} item={product} />
        </Col>
      )) : null}

      <Col xs={12}>
        <PaginationButtons
          currentPage={paginatorInfo.currentPage}
          total={paginatorInfo.total}
          perPage={paginatorInfo.perPage}
          disabled={loader}
          onNextPage={(page) => handlerNextPage(page, false)}
          onShowMore={(page) => handlerNextPage(page, true)}
        />
      </Col>
    </Row>
  )
}