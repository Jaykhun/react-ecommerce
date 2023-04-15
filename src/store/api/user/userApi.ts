import { AddUser, EditUser, FetchUser } from '@models/userTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }),
    tagTypes: ['user'],
    endpoints: build => ({
        getAllUsers: build.query<FetchUser[], void>({
            query: () => 'users/',
            providesTags: ['user']
        }),
        getSingleUser: build.query<FetchUser, number>({
            query: (id) => `users/${id}`,
            providesTags: ['user']
        }),
        addUser: build.mutation<FetchUser, AddUser>({
            query: (user) => ({
                url: 'users/',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['user']
        }),
        addAdmin: build.mutation<FetchUser, AddUser>({
            query: (admin) => ({
                url: 'users/admin',
                method: 'POST',
                body: admin
            }),
            invalidatesTags: ['user']
        }),
        editUser: build.mutation<EditUser, { data: EditUser, id: number }>({
            query: (user) => ({
                url: `users/${user.id}`,
                method: 'PUT',
                body: user.data
            }),
            invalidatesTags: ['user']
        }),
        deleteUser: build.mutation<void, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        })
    })
})