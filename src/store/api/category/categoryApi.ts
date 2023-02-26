import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "./categoryTypes"

const url = 'https://ecommerce.icedev.uz/'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }),
    tagTypes: ['Categories'],
    endpoints: build => ({
        getAllCategories: build.query<ICategory[], void>({
            query: () => 'categories/',
            providesTags: ['Categories']
        }),
        getSingleCategory: build.query<ICategory, number | undefined>({
            query: (id) => `categories/${id}`,
            providesTags: ['Categories']
        }),
        getProductsByCategory: build.query<ICategory, any>({
            query: (id) => `categories/${id}/products`,
            providesTags: ['Categories']
        }),
        addCategory: build.mutation<ICategory, Partial<ICategory>>({
            query: (category) => ({
                url: 'categories/',
                method: 'POST',
                body: category,
                headers: {
                    'Content-type': 'application/json: charset=UTF-8'
                }
            }),
            invalidatesTags: ['Categories']
        }),
        updateCategory: build.mutation<ICategory, Partial<ICategory>>({
            query: ({ id, ...rest }) => ({
                url: `categories/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Categories']
        }),
        deleteCategory: build.mutation<ICategory, number>({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Categories']
        })
    })
})

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery,
    useAddCategoryMutation, useDeleteCategoryMutation,
    useUpdateCategoryMutation, useGetProductsByCategoryQuery
} = categoryApi