import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AddReviewType} from "./reviewType";

const url = 'https://ecommerce.icedev.uz/'

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: build => ({
        addReview: build.mutation<AddReviewType, { id: number, review: AddReviewType }>({
            query: ({id, review}) => ({
                url: `products/${id}/reviews`,
                method: 'POST',
                body: review
            })
        })
    })
})

export const {useAddReviewMutation} = reviewApi