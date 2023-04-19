import { FetchOrderStatus, IOrderStatus } from '@/models/orderStatusTypes'
import { orderApi } from './order'

export const orderStatusApi = orderApi.injectEndpoints({
    endpoints: build => ({
        getAllOrdersStatus: build.query<FetchOrderStatus[], void>({
            query: () => 'orders/status/',
            providesTags: ['orders']
        }),
        getSingleOrderStatus: build.query<FetchOrderStatus, number>({
            query: (id) => `orders/status/${id}`,
            providesTags: ['orders']
        }),
        addOrderStatus: build.mutation<FetchOrderStatus, IOrderStatus>({
            query: (orderStatus) => ({
                url: 'orders/status',
                method: 'POST',
                body: orderStatus
            }),
            invalidatesTags: ['orders']
        }),
        editOrderStatus: build.mutation<FetchOrderStatus, {data: IOrderStatus, id: number}>({
            query: (orderStatus) => ({
                url: `orders/status/${orderStatus.id}`,
                method: 'PUT',
                body: orderStatus.data
            }),
            invalidatesTags: ['orders']
        }),
        deleteOrderStatus: build.mutation<void, number> ({
            query: (id) => ({
                url: `orders/status/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['orders']
        })
    })
}) 