import { gql } from '@apollo/client'

export const PRODUCT_LIST = gql`
    query ProductListPaginator(
        $categoryId: Int!, 
        $priceFrom: Float, 
        $priceTo: Float, 
        $search: String, 
        $first: Int = 30, 
        $page: Int = 1
    ) {
        products(
            categoryId: $categoryId,
            priceFrom: $priceFrom, 
            priceTo: $priceTo,
            search: $search,
            first: $first,
            page: $page
        ) {
            data {
                id
                heading
                slug
                price
                price_old
                category {
                    heading
                }
            }
            paginatorInfo {
                total
                perPage
                currentPage
            }
        }
    }
`;