import { gql } from '@apollo/client'

export const PRODUCT_DETAIL = gql`
    query Product($slug: String!) {
        product(slug: $slug) {
            id
            heading
            slug
            price
            price_old
            title
            description
            keywords
            content
            category {
                id
                heading
                slug
            }
            categoryParents {
                id
                heading
                slug
            }
        }
    }
`;