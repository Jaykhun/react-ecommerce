import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {AddOrderType, Order, UserOrders} from "./orderType"

const url = 'https://ecommerce.icedev.uz/'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['Orders'],
    endpoints: build => ({
        getAllOrders: build.query<UserOrders[], string>({
            query: (token) => ({
                url: `orders/`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }),
        }),
        getAllUserOrders: build.query<UserOrders[], number>({
            query: (id) => `orders/${id}`,
        }),
        getSingleUserOrder: build.query<UserOrders[], { user_id: number, order_id: number }>({
            query: ({user_id, order_id}) => `orders/${user_id}/${order_id}`,
        }),
        addNewOrder: build.mutation<AddOrderType, Partial<AddOrderType>>({
            query: (order) => ({
                url: `orders/`,
                method: 'POST',
                body: order
            }),
        }),
        updateOrder: build.mutation<Order, { id: number, order: Order }>({
            query: ({id, order}) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: order
            }),
        }),
        deleteOrder: build.mutation<UserOrders, { user_id: number, order_id: number }>({
            query: ({user_id, order_id}) => ({
                url: `orders/${user_id}/${order_id}`,
                method: 'DELETE'
            }),
        })
    })
})

export const {
    useGetAllOrdersQuery, useGetAllUserOrdersQuery,
    useGetSingleUserOrderQuery, useAddNewOrderMutation,
    useDeleteOrderMutation, useUpdateOrderMutation
} = orderApi