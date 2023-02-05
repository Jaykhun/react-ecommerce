import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICountry, NewCountry} from "./countryTypes";

const url = 'https://ecommerce-h6sh.onrender.com/'

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    tagTypes: ['Countries'],
    endpoints: build => ({
        getAllCountries: build.query<ICountry[], void>({
            query: () => 'countries/',
            providesTags: ['Countries']
        }),
        getSingleCountry: build.query<ICountry, string | undefined>({
            query: (id) => `countries/${id}`,
            providesTags: ['Countries']
        }),
        addCountry: build.query<NewCountry, Partial<NewCountry>>({
            query: (country) => ({
                url: 'countries/',
                method: 'POST',
                body: country,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
        }),
        updateCountry: build.query<NewCountry, Partial<ICountry>>({
            query: ({id, ...rest}) => ({
                url: `countries/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                invalidatesTags: ['Countries']
            }),
        }),
        deleteCountry: build.query<ICountry, number>({
            query: (id) => ({
                url: `countries/${id}`,
                method: 'DELETE',
                invalidatesTags: ['Countries']
            }),
        })
    })
})

export const {
    useGetAllCountriesQuery, useGetSingleCountryQuery,
    useAddCountryQuery, useUpdateCountryQuery, useDeleteCountryQuery
} = countryApi