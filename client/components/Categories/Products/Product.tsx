import { FC } from 'react'
import Link from 'next/link'
import { ProductListType } from '../../../store/products/types'
import { CategoryDetailType } from '../../../store/category/types'
import { Button, Card } from 'react-bootstrap'

type PropTypes = {
  category: CategoryDetailType;
  item: ProductListType;
}

export const Product: FC<PropTypes> = ({ category, item }: PropTypes) => (
  <Card>
    <Card.Body>
      <Card.Title>
        {item.heading}
      </Card.Title>
      <Card.Text>
        <p>
          <Link href={'/category/[slug]'} as={`/category/${category.slug}`}>
            <a>{category.heading}</a>
          </Link>
        </p>
        <p>
          Price <b className={'h4'}>${item.price}</b>
        </p>
      </Card.Text>
      <Link href={'/product/[slug]'} as={`/product/${item.slug}`}>
        <Button size={'sm'} variant="primary">
          Read more
        </Button>
      </Link>
    </Card.Body>
  </Card>
)