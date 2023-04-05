import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['product'],
    endpoints: build => ({
        getAllProducts: build.query({
            query: () => 'products/',
            providesTags: ['product']
        })
    })
})