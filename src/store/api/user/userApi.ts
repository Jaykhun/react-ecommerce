import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AuthUser, IUser, LoginType, Token, UserEdit } from "./userTypes"

const url = 'https://ecommerce.icedev.uz/'

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
            query: () => 'users/',
            providesTags: ['Users']
        }),
        getSingleUser: build.query<IUser, number | undefined>({
            query: (id) => `users/${id}`,
            providesTags: ['Users']
        }),
        loginUser: build.mutation<Token, Partial<AuthUser>>({
            query: (data: LoginType) => {
                const body = encodeURIComponent('username') + '=' + encodeURIComponent(data.username) + '&&' +
                    encodeURIComponent('password') + '=' + encodeURIComponent(data.password)
                return {
                    url: 'token',
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    }
                }
            }
        }),
        addUser: build.mutation<IUser, Partial<IUser>>({
            query: (user) => ({
                url: `users/`,
                method: 'POST',
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

        updateProfileUser: build.mutation<UserEdit, { id: number | undefined, rest: UserEdit }>({
            query: ({id, rest}) => ({
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
    useDeleteUserMutation,
    useLoginUserMutation,
    useUpdateProfileUserMutation
} = userApi