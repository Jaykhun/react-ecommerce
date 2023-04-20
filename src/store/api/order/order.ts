import { AddOrder, EditOrder, FetchOrder } from '@/models/orderTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['orders'],
    endpoints: build => ({
        getAllOrders: build.query<FetchOrder[], void>({
            query: () => 'orders/',
            providesTags: ['orders']
        }),
        getSingleOrder: build.query<FetchOrder, number>({
            query: (id) => `orders/${id}`,
            providesTags: ['orders']
        }),
        addOrder: build.mutation<FetchOrder, AddOrder>({
            query: (order) => ({
                url: 'orders/',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['orders']
        }),
        editOrder: build.mutation<FetchOrder, { data: EditOrder, id: number }>({
            query: (order) => ({
                url: `orders/${order.id}`,
                method: 'PUT',
                body: order.data
            }),
            invalidatesTags: ['orders']
        }),
        deleteOrder: build.mutation<void, { userId: number, orderId: number }>({
            query: (order) => ({
                url: `orders/${order.userId}/${order.orderId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['orders']
        })
    })
})