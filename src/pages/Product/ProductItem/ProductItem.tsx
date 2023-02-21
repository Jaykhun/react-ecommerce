import React, {FC} from 'react';
import "./ProductItem.scss";
import {IProduct} from "../../../store/product/productTypes";
import {Link} from "react-router-dom";
import {ProductControl} from "../../../components/UI";

interface ProductItemPropsType {
    product: IProduct
}

const ProductItem: FC<ProductItemPropsType> = ({product}) => {
    const {name, images, category, id, price, discount, quantity, description} = product

    return (
        <div className="item__row">
            <Link to={`product/${id}`} className="item__top">
                <div className="item__img">
                    <img src={images[0].image_path} alt={name}/>
                </div>

                <div className="item__prices">
                    <div className="item__price price-current">{price} &#36;</div>
                    {discount > 1 ? <div className="item__discount price-discount">{discount}</div> : ''}
                </div>
            </Link>

            <div className="item__body">
                <div className="item__info">
                    <div className="item__name product-name">{name}</div>
                </div>

                <div className="item__control control">
                    <div className="item__sale">
                        <div className="word-sale">sale</div>
                    </div>

                    <div className="control__top">
                        <button className="btn r-btn w-opacity item__cart">
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductItem;