import React, {FC} from 'react';
import "./ProductsItem.scss";
import {IProduct} from "../../../../store/product/productTypes";
import {useDeleteProductMutation} from "../../../../store/product/productApi";

interface AllProductsItemProps {
    product: any
}

const ProductsItem: FC<AllProductsItemProps> = ({product}) => {
    const {price, title, category, image, description, id} = product
    const [deleteProduct] = useDeleteProductMutation()

    const handleDeleteProduct = async () => {
        await deleteProduct(id)
    }

    return (
        <div className="all-products__item item">
            <div className="item__inner">
                <div className="item__info">
                    <div className="item__image"><img src={image} alt={title}/></div>
                    <div className="item__title">
                        <div className="item__name">{title}</div>
                        <div className="item__category category">
                            <div className="category__item">
                                {category}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item__control">
                    <div className="item__description">{description}</div>
                    <div className="item__price">{price} &#36;</div>
                    <div className="item__discount">20 &#37;</div>

                    <div className="item__buttons">
                        <button className="item__change"></button>
                        <button className="item__delete" onClick={handleDeleteProduct}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;