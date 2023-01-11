import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";
import {IProduct} from "./productTypes";

const url = 'https://fakestoreapi.com/'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: build => ({
        getAllProducts: build.query<any[], void>({
            query() {
                return 'products'
            }
        })
    })
})

export const {useGetAllProductsQuery} = productApi
