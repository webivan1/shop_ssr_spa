import Link from 'next/link'
import { FC, useState } from 'react'
import { CategoryItemType } from '../../store/categories/types'
import { Button } from "react-bootstrap";

type PropTypes = {
  categories: CategoryItemType[];
  visible?: boolean;
}

type CategoryItemPropTypes = {
  item: CategoryItemType;
}

const CategoryItem: FC<CategoryItemPropTypes> = ({ item }: CategoryItemPropTypes) => (
  <li>
    <Link href="/category/[slug]" as={`/category/${item.slug}`}>
      <a>{item.heading}</a>
    </Link>
  </li>
)

const CategoryItemWithChildren: FC<CategoryItemPropTypes> = ({ item }: CategoryItemPropTypes) => {

  const [showList, toggleList] = useState<boolean>(false);

  const handleClick = () => toggleList(!showList);

  return (
    <li>
      <Button onClick={handleClick} size="sm" variant="outline-primary">
        {showList ? '-' : '+'}
      </Button>
      <Link href="/category/[slug]" as={`/category/${item.slug}`}>
        <a>{item.heading}</a>
      </Link>
      {item.children?.length ? <CategoryList visible={showList} categories={item.children} /> : null}
    </li>
  )
}

export const CategoryList: FC<PropTypes> = ({ categories, visible = true }: PropTypes) => (
  <ul style={{ display: visible ? 'block' : 'none' }}>
    {categories.map(category => {
      const isChildren = category.children?.length;

      if (isChildren) {
        return <CategoryItemWithChildren key={category.id} item={category} />
      } else {
        return <CategoryItem key={category.id} item={category} />
      }
    })}
  </ul>
);