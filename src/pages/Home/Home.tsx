import React from 'react';
import "./Home.scss";
import {Product} from "./index";

const Home = () => {
    return (
        <div className="content__product product">
            <div className="product__row">
                <div className="product__title title">Новинки</div>
                <Product/>
            </div>
        </div>
    );
};

export default Home;