import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AddOrderType, Order, UserOrders } from "./orderType"

const url = 'https://ecommerce.icedev.uz/'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }),
    tagTypes: ['Orders'],
    endpoints: build => ({
        getAllOrders: build.query<UserOrders[], void>({
            query: () => 'orders/',
            providesTags: ['Orders']
        }),
        getAllUserOrders: build.query<UserOrders[], number>({
            query: (id) => `orders/${id}`,
            providesTags: ['Orders']
        }),
        getSingleUserOrder: build.query<UserOrders[], { user_id: number, order_id: number }>({
            query: ({user_id, order_id}) => `orders/${user_id}/${order_id}`,
            providesTags: ['Orders']
        }),
        addNewOrder: build.mutation<AddOrderType, Partial<AddOrderType>>({
            query: (order) => ({
                url: `orders/`,
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrder: build.mutation<Order, { id: number, order: Order }>({
            query: ({id, order}) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: order
            }),
            invalidatesTags: ['Orders']
        }),
        deleteOrder: build.mutation<UserOrders, { user_id: number, order_id: number }>({
            query: ({user_id, order_id}) => ({
                url: `orders/${user_id}/${order_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const {
    useGetAllOrdersQuery, useGetAllUserOrdersQuery,
    useGetSingleUserOrderQuery, useAddNewOrderMutation,
    useDeleteOrderMutation, useUpdateOrderMutation
} = orderApi