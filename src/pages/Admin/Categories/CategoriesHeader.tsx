import { Button } from '@/components/UI'

const CategoriesHeader = () => {

    const handleAdd = () => { }
    return (
        <>
            <div className="categories__title">Категории</div>
            <div className="categories__header">
                <div className="categories__search">
                    <input
                        type='search'
                        placeholder='Искать...'
                        className='input__style'
                    />
                </div>

                <div className='categories__add' onClick={handleAdd}>
                    <Button hoverEffect>Добавить</Button>
                </div>
            </div>
        </>
    )
}

export default CategoriesHeader