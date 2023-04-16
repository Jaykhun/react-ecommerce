import { AddProduct, EditProduct, FetchProduct } from '@/models/productTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['product'],
    endpoints: build => ({
        getAllProducts: build.query<FetchProduct[], number>({
            query: (limit) => `products/?limit=${limit}`,
            providesTags: ['product']
        }),
        getSingleProduct: build.query<FetchProduct, number>({
            query: (id) => `products/${id}`,
            providesTags: ['product']
        }),
        getProductByCategory: build.query<FetchProduct[], number>({
            query: (id) => `categories/${id}products`,
            providesTags: ['product']
        }),
        addProduct: build.mutation<FetchProduct, AddProduct>({
            query: (data) => ({
                url: 'products/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['product']
        }),
        editProduct: build.mutation<FetchProduct, { data: EditProduct, id: number }>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: product.data
            }),
            invalidatesTags: ['product']
        }),
        deleteProduct: build.mutation<void, number>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['product']
        })
    })
})