import './Products.scss'
import { ProductsBody, ProductsHeader } from './index'

const Products = () => {
    return (
        <div className='products'>
            <ProductsHeader />
            <ProductsBody />
        </div>
    )
}

export default Products