import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "./productTypes";

const url = 'https://fakestoreapi.com/'
const urlApi = 'https://ecommerce-h6sh.onrender.com/products/'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Products'],
    endpoints: build => ({
        getAllProducts: build.query<any[], void>({
            query: () => 'products',
            providesTags: ['Products']
        }),
        getSingleProduct: build.query<any[], void>({
            query: (id) => `products/${id}`,
            providesTags: ['Products']
        }),
        addProduct: build.mutation<any, any>({
            query: (product) => ({
                url: `products`,
                method: 'Post',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: build.mutation<void, any>({
            query: ({id, ...rest}) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation<any, any>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE'
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
