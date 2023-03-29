import { AddUser, EditUser, FetchUser } from '@models/userTypes'
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
            query: () => 'users',
            providesTags: ['user']
        }),
        getSingleUser: build.query<FetchUser, number>({
            query: (id) => `users/${id}`,
            providesTags: ['user']
        }),
        addUser: build.mutation<FetchUser, AddUser>({
            query: (user) => ({
                url: 'users',
                body: user,
                method: 'POST'
            }),
            invalidatesTags: ['user']
        }),
        addAdmin: build.mutation<FetchUser, AddUser>({
            query: (admin) => ({
                url: 'users/admin',
                body: admin,
                method: 'POST'
            }),
            invalidatesTags: ['user']
        }),
        editUser: build.mutation<EditUser, { data: EditUser, id: number }>({
            query: (user) => ({
                url: `users/${user.id}`,
                body: user.data,
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'PUT'
            }),
            invalidatesTags: ['user']
        }),
        deleteUser: build.mutation<void, number>({
            query: (id) => ({
                url: `userss/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        })
    })
})