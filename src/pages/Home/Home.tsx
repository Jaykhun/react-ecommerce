import { ProductSlider } from '../Product'
import "./Home.scss"
import ProductDiscount from "./ProductDiscount"

const Home = () => {
    return (
        <div className="content__product product">
            <div className="product__discount discount">
                <ProductDiscount/>
            </div>
            <div className="product__row">
                <div className="product__title title">Спецпредложения</div>
                <ProductSlider/>
                <div className="product__title title">Новинки</div>
                <ProductSlider/>
            </div>
        </div>
    );
};

export default Home;