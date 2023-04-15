import { FetchCountry, ICountry } from '@models/countryTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://ecommerce.icedev.uz/'

export const countryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['country'],
    endpoints: build => ({
        getAllCountries: build.query<FetchCountry[], void>({
            query: () => 'countries/',
            providesTags: ['country']
        }),
        getSingleCountry: build.query<FetchCountry, number>({
            query: (id) => `countries/${id}`,
            providesTags: ['country']
        }),
        addCountry: build.mutation<FetchCountry, ICountry>({
            query: (country) => ({
                url: 'countries/',
                method: 'POST',
                body: country
            }),
            invalidatesTags: ['country']
        }),
        editCountry: build.mutation<FetchCountry, { data: ICountry, id: number }>({
            query: (country) => ({
                url: `countries/${country.id}`,
                method: 'PUT',
                body: country.data
            }),
            invalidatesTags: ['country']
        }),
        deleteCountry: build.mutation<FetchCountry, number>({
            query: (id) => ({
                url: `countries/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['country']
        })
    })
})