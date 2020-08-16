import { gql } from '@apollo/client'

export const CATEGORY_DETAIL = gql`
    query Category($slug: String!) {
        category(slug: $slug) {
            id
            heading
            slug
            content
            seo {
                title
                description
                keywords
            },
            children {
                id
                heading
                slug
            }
        }
    }
`;