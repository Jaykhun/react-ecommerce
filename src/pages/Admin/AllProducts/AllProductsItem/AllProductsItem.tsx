import React, {FC} from 'react';
import {IProduct} from "../../../../store/product/productTypes";

interface AllProductsItemProps {
    product: any
}

const AllProductsItem: FC<AllProductsItemProps> = ({product}) => {
    const {name, quantity, price, title} = product
    return (
        <div>
            {title} {price}
        </div>
    );
};

export default AllProductsItem;