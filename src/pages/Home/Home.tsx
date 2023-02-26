import { useGetAllProductsQuery } from '../../store/api/product/productApi'
import { ProductSlider } from '../Product'
import "./Home.scss"
import ProductDiscount from "./ProductDiscount"

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div className="content__product product">
            <div className="product__discount discount">
                <ProductDiscount />
            </div>
            <div className="product__row">
                <div className="product__title title">Спецпредложения</div>
                <ProductSlider data={data} error={error} isLoading={isLoading} />
                <div className="product__title title">Новинки</div>
                <ProductSlider data={data} error={error} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Home