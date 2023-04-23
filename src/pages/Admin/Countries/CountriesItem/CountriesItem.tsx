import { Skeleton } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import countryApi from '@/store/api/country'
import { FetchCountry } from '@models/countryTypes'
import { Notify } from 'notiflix'
import { FC } from 'react'
import './CountriesItem.scss'

interface CountriesItemProps {
    country: FetchCountry
}

const CountriesItem: FC<CountriesItemProps> = ({ country }) => {
    const { id, country_name } = country
    const { openCountryEditModal } = useActions()
    const [deleteCountry, { isLoading }] = countryApi.useDeleteCountryMutation()

    const handleEdit = () => openCountryEditModal(id)
    const handleDelete = async () => {
        try {
            await deleteCountry(id).unwrap()
            Notify.success(`${country_name} успешно удален`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }

        catch (e: any) {
            Notify.failure(`Ошибка при удаление ${country_name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    if (isLoading) return <Skeleton isLoading={isLoading} />

    return (
        <div className='countries__item item-countries'>
            <div className="item-countries__body">
                <div className="item-countries__name">{country_name}</div>
            </div>

            <div className="item-countries__actions">
                <div className="item-countries__edit" onClick={handleEdit}></div>
                <div className="item-countries__delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default CountriesItem