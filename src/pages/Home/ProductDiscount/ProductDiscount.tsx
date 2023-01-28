import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductDiscount.scss";

const ProductDiscount = () => {
    return (
        <div className="discount__body">
            <div className="discount__info info">
                <div className="info__discount">-20 %</div>
                <div className="info__title">Внимание акция!</div>
                <p className="info__txt">закажи с сайта и получи скидку</p>
            </div>
        </div>
    );
};

export default ProductDiscount;