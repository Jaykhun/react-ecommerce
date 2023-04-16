import { FetchCategory, MutationCategoryType } from '@/models/categoryTypes'
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
        }),
        getSingleCategory: build.query<FetchCategory, number>({
            query: (id) => `categories/${id}`
        }),
        addCategory: build.mutation<FetchCategory, MutationCategoryType>({
            query: (category) => ({
                url: 'categories/',
                method: 'POST',
                body: category
            })
        }),
        editCategory: build.mutation<FetchCategory, { data: MutationCategoryType, id: number }>({
            query: (category) => ({
                url: `categories/${category.id}`,
                method: 'PUT',
                body: category.data
            })
        }),
        deleteCategory: build.mutation<void, number>({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE'
            })
        })
    })
})