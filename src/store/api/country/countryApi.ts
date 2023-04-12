import { FetchCountry, ICountry } from '@/models/countryType'
import userApi from '../user'

export const countryApi = userApi.injectEndpoints({
    endpoints: build => ({
        getAllCountries: build.query<FetchCountry[], void>({
            query: () => 'countries/',
            providesTags: ['user-country']
        }),
        getSingleCountry: build.query<FetchCountry, number>({
            query: (id) => `countries/${id}`,
            providesTags: ['user-country']
        }),
        addCountry: build.mutation<FetchCountry, ICountry>({
            query: (country) => ({
                url: 'countries/',
                method: 'POST',
                body: country
            }),
            invalidatesTags: ['user-country']
        }),
        editCountry: build.mutation<FetchCountry, {data: ICountry, id: number}>({
            query: (country) => ({
                url: `countries/${country.id}`,
                method: 'PUT',
                body: country.data
            }),
            invalidatesTags: ['user-country']
        }),
        deleteCountry: build.mutation<FetchCountry, number>({
            query: (id) => ({
                url: `countries/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user-country']
        })
    })
})