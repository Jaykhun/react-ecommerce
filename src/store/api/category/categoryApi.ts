import { FetchCategory, MutationCategoryType } from '@/models/categoryTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['category'],
    endpoints: build => ({
        getAllCategories: build.query<FetchCategory[], void>({
            query: () => 'categories/',
            providesTags: ['category']
        }),
        getSingleCategory: build.query<FetchCategory, number>({
            query: (id) => `categories/${id}`,
            providesTags: ['category']
        }),
        addCategory: build.mutation<FetchCategory, MutationCategoryType>({
            query: (category) => ({
                url: 'categories/',
                method: 'POST',
                body: category
            }),
            invalidatesTags: ['category']
        }),
        editCategory: build.mutation<FetchCategory, { data: MutationCategoryType, id: number }>({
            query: (category) => ({
                url: `categories/${category.id}`,
                method: 'PUT',
                body: category.data
            }),
            invalidatesTags: ['category']
        }),
        deleteCategory: build.mutation<void, number>({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['category']
        })
    })
})