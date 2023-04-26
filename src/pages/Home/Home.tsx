import { Product } from '@/pages/Product'
import productApi from '@/store/api/product'
import './Home.scss'

const Home = () => {
    const { data: products = [], isLoading, isError, error } = productApi.useGetAllProductsQuery()

    const state = {
        isLoading: isLoading,
        isError: isError,
        error: error
    }

    return (
        <div className='home'>
            <div className="home__title">Товары</div>
            <div className="home__body">
                <Product products={products} state={state} />
            </div>
        </div>
    )
}

export default Home