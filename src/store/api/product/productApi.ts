import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./productTypes";

const url = 'https://ecommerce.icedev.uz/'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }),
    tagTypes: ['Products'],
    endpoints: build => ({
        getAllProducts: build.query<IProduct[], void>({
            query: () => 'products/',
            providesTags: ['Products']
        }),
        getSingleProduct: build.query<IProduct, number | undefined>({
            query: (id) => `products/${id}`,
            providesTags: ['Products']
        }),
        addProduct: build.mutation<IProduct, Partial<IProduct>>({
            query: (product) => ({
                url: `products/`,
                method: 'POST',
                body: product,
                headers: {
                    'Content-type': 'application/json: charset=UTF-8'
                }
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: build.mutation<IProduct, Partial<IProduct>>({
            query: ({ id, ...rest }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation<IProduct, number>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Products']
        })
    })
})

export const {
    useGetAllProductsQuery,
    useDeleteProductMutation,
    useAddProductMutation,
    useGetSingleProductQuery,
    useUpdateProductMutation
} = productApi
