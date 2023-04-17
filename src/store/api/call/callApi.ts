import { FetchCall, ICall } from '@/models/callTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const callApi = createApi({
    reducerPath: 'callApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['call'],
    endpoints: build => ({
        getAllCalls: build.query<FetchCall[], void>({
            query: () => 'call_orders',
            providesTags: ['call']
        }),
        getSingleCall: build.query<FetchCall, number>({
            query: (id) => `call_orders${id}`,
            providesTags: ['call']
        }),
        addCall: build.mutation<FetchCall, ICall>({
            query: (call) => ({
                url: 'call_orders',
                method: 'POST',
                body: call
            }),
            invalidatesTags: ['call']
        }),
        deleteCall: build.mutation<void, number>({
            query: (id) => ({
                url: `call_orders/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['call']
        })
    })
})