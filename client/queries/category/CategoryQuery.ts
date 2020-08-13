import { gql } from '@apollo/client'

export const CATEGORY_DETAIL = gql`
    query CategoryDetail($slug: String) {
        categoryDetail(slug: $slug) {
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