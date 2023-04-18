import { Loader, Message } from '@/components/UI'
import countryApi from '@/store/api/country'
import CountriesItem from './CountriesItem'

const CountriesBody = () => {
    const { data: countries, isError, isFetching, error } = countryApi.useGetAllCountriesQuery()

    return (
        <div className='countries__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : countries?.length
                            ? countries?.map(country => <CountriesItem country={country} key={country.id} />)
                            : <Message value='нет страны' />
            }
        </div>
    )
}

export default CountriesBody