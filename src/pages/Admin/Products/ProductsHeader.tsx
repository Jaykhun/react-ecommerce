import { Button } from '@/components/UI'

const ProductsHeader = () => {

    const handleAdd = () => { }
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

                <div className='users__add' onClick={handleAdd}>
                    <Button hoverEffect>Добавить</Button>
                </div>
            </div>
        </>
    )
}

export default ProductsHeader