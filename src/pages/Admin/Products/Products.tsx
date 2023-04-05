import './Products.scss'
import { ProductsBody, ProductsHeader } from './index'

const Products = () => {
    window.scrollTo(0, 0)

    return (
        <div className='products'>
            <ProductsHeader />
            <ProductsBody />
        </div>
    )
}

export default Products