import { Button } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const ProductsHeader = () => {
    const { openProductAddModal } = useActions()
    const handleAdd = () => openProductAddModal()

    return (
        <>
            <div className="products__title">Продукты</div>
            <div className="products__header">
                <div className="products__search">
                    <input
                        type='search'
                        placeholder='Искать...'
                        className='input__style'
                    />
                </div>

                <div className='products__add' onClick={handleAdd}>
                    <Button hoverEffect>Добавить</Button>
                </div>
            </div>
        </>
    )
}

export default ProductsHeader