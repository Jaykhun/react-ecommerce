import { FetchCountry } from '@/models/countryType'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const url = 'https://ecommerce.icedev.uz/'

export const countryAPi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    tagTypes: ['country'],
    endpoints: build => ({
        getAllCountries: build.query<FetchCountry[], void>({
            query: () => 'country',
            providesTags: ['country']
        })
    })
})