import './Products.scss'
import { ProductsAdd, ProductsBody, ProductsEdit, ProductsHeader } from './index'

const Products = () => {
    return (
        <div className='products'>
            <ProductsHeader />
            <ProductsBody />
            <ProductsAdd />
            <ProductsEdit />
        </div>
    )
}

export default Products