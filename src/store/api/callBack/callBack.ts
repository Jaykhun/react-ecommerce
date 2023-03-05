import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FetchCallBack, ICallBack} from "./callBackType";

const url = 'https://ecommerce.icedev.uz';

export const callBackApi = createApi({
    reducerPath: 'callBackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['CallBacks'],
    endpoints: build => ({
        getAllCallBacks: build.query<FetchCallBack[], void>({
            query: () => 'call_orders/',
            providesTags: ['CallBacks']
        }),
        getSingleCallBack: build.query<FetchCallBack, number>({
            query: (id) => `call_orders${id}`
        }),
        addCallBack: build.mutation<ICallBack, Partial<FetchCallBack>>({
            query: (call) => ({
                url: `call_orders/`,
                method: 'POST',
                body: call
            }),
            invalidatesTags: ['CallBacks']
        }),
        deleteCallBack: build.mutation<FetchCallBack, number>({
            query: (id) => ({
                url: `call_orders/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['CallBacks']
        })
    })
})

export const {
    useGetAllCallBacksQuery, useGetSingleCallBackQuery,
    useAddCallBackMutation, useDeleteCallBackMutation
} = callBackApi