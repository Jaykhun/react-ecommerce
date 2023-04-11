import { Button } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const CountriesHeader = () => {
    const { openCountryAddModal } = useActions()
    const handleAdd = () => openCountryAddModal()

    return (
        <>
            <div className="countries__title">Страны</div>
            <div className="countries__header">
                <div className="countries__search">
                    <input
                        type='search'
                        placeholder='Искать...'
                        className='input__style'
                    />
                </div>

                <div className='countries__add' onClick={handleAdd}>
                    <Button hoverEffect>Добавить</Button>
                </div>
            </div>
        </>
    )
}

export default CountriesHeader