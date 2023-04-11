import { Loader, Message } from '@/components/UI'
import { countryAPi } from '@/store/api'
import CountriesItem from './CountriesItem'

const CountriesBody = () => {
    const { data: countries, isError, isFetching, error } = countryAPi.useGetAllCountriesQuery()

    return (
        <div className='countries__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : countries?.length
                            ? countries?.map(country => <CountriesItem country={country} key={country.id} />)
                            : <Message value='нет пользователи' />
            }
        </div>
    )
}

export default CountriesBody