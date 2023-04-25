import './Countries.scss'
import { CountriesAdd, CountriesBody, CountriesEdit, CountriesHeader } from './index'

const Countries = () => {
    return (
        <div className='countries'>
            <CountriesHeader />
            <CountriesBody />
            <CountriesAdd />
            <CountriesEdit />
        </div>
    )
}

export default Countries