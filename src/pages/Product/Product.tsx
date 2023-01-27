import React, {FC} from 'react';
import "./Product.scss";
import {IProduct} from "../../store/product/productTypes";

interface ProductPropsType {
    product: IProduct
}

const Product: FC<ProductPropsType> = ({product}) => {
    return (
        <div className="products">

        </div>
    );
};

export default Product;