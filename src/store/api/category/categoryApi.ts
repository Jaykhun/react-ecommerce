import { FetchCategory } from '@models/categoryTypes'
import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const categoryAPi = createApi({
    reducerPath: 'categoryAPi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: build => ({
        getAllCategories: build.query<FetchCategory[], void>({
            query: () => 'categories/'
        })
    })
})