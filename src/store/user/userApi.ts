import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "./userTypes";

const url = 'https://ecommerce-h6sh.onrender.com'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }),
    tagTypes: ['Users'],
    endpoints: build => ({
        getAllUsers: build.query<IUser[], void>({
            query: () => 'users',
            providesTags: ['Users']
        }),
        getSingleUser: build.query<IUser, void>({
            query: (id) => `users/${id}`,
            providesTags: ['Users']
        }),
        addUser: build.mutation<IUser, Partial<IUser>>({
            query: (user) => ({
                url: `users`,
                method: 'Post',
                body: user,
                headers: {
                    'Content-type': 'application/json: charset=UTF-8'
                }
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: build.mutation<IUser, Partial<IUser>>({
            query: ({id, ...rest}) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: build.mutation<IUser, number | undefined>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = userApi