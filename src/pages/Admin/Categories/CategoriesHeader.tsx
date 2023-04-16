import { Button } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const CategoriesHeader = () => {
    const { openCategoryAddModal } = useActions()
    const handleAdd = () => openCategoryAddModal()
    
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

            <div className="categories__list list-categories">
                <div className="list-categories__item">Название</div>
                <div className="list-categories__item">Родительский</div>
                <div className="list-categories__item">Дочерний</div>
                <div className="list-categories__item categories-action">Действие</div>
            </div>
        </>
    )
}

export default CategoriesHeader