import { FC } from 'react'
import Link from 'next/link'
import { CategoryChildrenType } from '../../store/category/types'
import { ListGroup } from 'react-bootstrap'

type PropTypes = {
  children: CategoryChildrenType[];
}

export const CategoryChildren: FC<PropTypes> = ({ children }: PropTypes) => {
  return (
    <ListGroup>
      {children.map(({ slug, heading }) => (
        <Link key={slug} href="/category/[slug]" as={`/category/${slug}`}>
          <ListGroup.Item action>
            {heading}
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  )
}