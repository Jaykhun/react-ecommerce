import './Countries.scss'
import { CountriesBody, CountriesHeader } from './index'

const Countries = () => {
    return (
        <div className='countries'>
            <CountriesHeader />
            <CountriesBody/>
        </div>
    )
}

export default Countries