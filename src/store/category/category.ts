import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory} from "./categoryTypes";

const url = 'https://ecommerce-h6sh.onrender.com/'

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
        })
    })
})

export const {useGetAllCategoriesQuery} = categoryApi