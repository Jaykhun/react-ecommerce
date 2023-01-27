import React from 'react';
import "./ProductControl.scss";

const ProductControl = () => {
    return (
        <div className="product__amount">
            <button className="product__decrease disable-btn"></button>
            <input type="number" className="product__count" value="1" max="10" min="1"/>
            <button className="product__increase"></button>
        </div>
    );
};

export default ProductControl;