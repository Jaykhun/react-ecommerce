import './Countries.scss'
import { CountriesBody, CountriesHeader } from './index'

const Countries = () => {
    window.scrollTo(0, 0)

    return (
        <div className='countries'>
            <CountriesHeader />
            <CountriesBody/>
        </div>
    )
}

export default Countries