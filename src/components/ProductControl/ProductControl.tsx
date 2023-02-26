import React, {FC} from 'react';
import "./ProductControl.scss";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface ProductControlPropsType {
    quantity: number
}

const ProductControl = () => {
    const {onIncrease, onDecrease} = useActions()
    const {productCount} = useTypedSelector(state => state.product)

    const handleDecrease = () => {
        onDecrease(productCount)
    }

    const handleIncrease = () => {
        onIncrease(productCount)
    }

    return (
        <div className="product__amount">
            <button className={`product__decrease ${productCount > 1 ? '' : 'disable-btn'}`}
                    onClick={handleDecrease}></button>
            <input type="number" className="product__count" value={productCount} max="10" min="1"/>
            <button className="product__increase" onClick={handleIncrease}></button>
        </div>
    );
};

export default ProductControl;