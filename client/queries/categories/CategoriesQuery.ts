import { gql } from '@apollo/client'

export const CATEGORIES_LIST = gql`
    query Categories {
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