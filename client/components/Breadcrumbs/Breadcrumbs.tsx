import { FC } from 'react'
import Link, { LinkProps } from 'next/link'
import { Breadcrumb as Base } from 'react-bootstrap'
import { isString } from '../../helpers'

type BreadcrumbsItem = {
  linkProps: LinkProps;
  title: string;
} | string;

type PropTypes = {
  items: BreadcrumbsItem[];
}

export const Breadcrumbs: FC<PropTypes> = ({ items }: PropTypes) => {
  return (
    <Base>
      <li className="breadcrumb-item">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      {items.map((item, index) => {
        if (isString(item)) {
          return <Base.Item key={index} active>{item}</Base.Item>
        } else {
          return (
            <li key={index} className="breadcrumb-item">
              <Link {...item.linkProps}>
                <a>{item.title}</a>
              </Link>
            </li>
          )
        }
      })}
    </Base>
  )
}