import { FetchProduct } from '@/models/productTypes'
import { Product } from '@/pages/Product'
import productApi from '@/store/api/product'
import './Home.scss'

const Home = () => {
    const { data: products = [], isLoading, isError, error, isSuccess } = productApi.useGetAllProductsQuery()
    const bestProducts: FetchProduct[] = []

    products.some((product) => {
        if (product.discount > 0) {
            bestProducts.push(product)
        }

        return bestProducts.length === 7
    })

    const state = {
        isLoading: isLoading,
        isError: isError,
        error: error
    }

    return (
        <div className='home'>
            <div className="home__title">Товары</div>
            <div className="home__body">
                <Product products={bestProducts} state={state} />
            </div>
        </div>
    )
}

export default Home