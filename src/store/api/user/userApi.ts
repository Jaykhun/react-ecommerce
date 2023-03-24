import { FetchUser } from '@/models/user'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
    }),
    tagTypes: ['user'],
    endpoints: build => ({
        getAllUsers: build.query<FetchUser[], void>({
            query: () => 'users/',
            providesTags: ['user']
        })
    })
})