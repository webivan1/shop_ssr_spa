import { gql } from '@apollo/client'

export const CATEGORIES_LIST = gql`
    query CategoryList {
        categories {
            id
            heading
            slug
            parent_id
            depth
            _lft
            _rgt
        }
    }
`;