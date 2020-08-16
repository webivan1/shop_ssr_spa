import { FC } from 'react'
import { useProductList } from './hook/useProductList'
import { Alert, Spinner } from 'react-bootstrap'

export const ProductList: FC = () => {

  const {
    error, paginatorInfo, data, loader, handlerNextPage, handlerSearch
  } = useProductList();

  if (!data.length && loader) {
    return <Spinner animation={'grow'} />
  }

  if (error) {
    return <Alert variant={'warning'}>{error}</Alert>
  }

  return (
    <div>
      <code>
        <pre>{JSON.stringify(data)}</pre>
      </code>
    </div>
  )
}