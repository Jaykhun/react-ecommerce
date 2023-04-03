import { FetchCountry } from '@/models/countryType'
import userApi from '../user'
const url = 'https://ecommerce.icedev.uz/'

export const countryAPi = userApi.injectEndpoints({
    endpoints: build => ({
        getAllCountries: build.query<FetchCountry[], void>({
            query: () => 'countries/',
        })
    })
})