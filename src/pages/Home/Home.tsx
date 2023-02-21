import React from 'react';
import "./Home.scss";
import {Product} from "../Product";
import ProductDiscount from "./ProductDiscount";

const Home = () => {
    return (
        <div className="content__product product">
            <div className="product__discount discount">
                <ProductDiscount/>
            </div>
            <div className="product__row">
                <div className="product__title title">Спецпредложения</div>
                <Product/>
                <div className="product__title title">Новинки</div>
                <Product/>
            </div>
        </div>
    );
};

export default Home;