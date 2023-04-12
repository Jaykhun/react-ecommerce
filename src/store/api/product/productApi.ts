import { AddProduct, FetchProduct } from '@/models/productTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const productApi = createApi({
    reducerPath: 'product-category-api',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['product-category'],
    endpoints: build => ({
        getAllProducts: build.query<FetchProduct[], void>({
            query: () => 'products/',
            providesTags: ['product-category']
        }),
        getSingleProduct: build.query<FetchProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['product-category']
        }),
        getProductByCategory: build.query<FetchProduct[], number>({
            query: (id) => `categories/${id}products`,
            providesTags: ['product-category']
        }),
        addProduct: build.mutation<FetchProduct, AddProduct>({
            query: (data) => ({
                url: 'products/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['product-category']
        }),
        editProduct: build.mutation<FetchProduct, { data: FetchProduct, id: number }>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: product.data
            }),
            invalidatesTags: ['product-category']
        }),
        deleteProduct: build.mutation<void, number>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['product-category']
        })
    })
})