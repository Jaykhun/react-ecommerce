import React, {FC} from 'react';
import "./ProductsItem.scss";
import {IProduct} from "../../../../store/product/productTypes";
import {useDeleteProductMutation} from "../../../../store/product/productApi";
import {v4 as keyId} from "uuid";
import {useActions} from "../../../../hooks/useActions";

interface ProductsItemProps {
    product: IProduct
}

const ProductsItem: FC<ProductsItemProps> = ({product}) => {
    const {onEditPopupClick} = useActions()
    const {name, id, price, description, discount, images, category} = product
    const [deleteProduct] = useDeleteProductMutation()

    const handleDeleteProduct = async () => {
        await deleteProduct(id)
    }

    return (
        <div className="all-products__item item">
            <div className="item__inner">
                <div className="item__info">
                    {
                        images.map(pImage =>
                            <div className="item__image">
                                <img
                                    src={pImage.image_path} key={keyId()} alt={name}
                                />
                            </div>)
                    }
                    <div className="item__title">
                        <div className="item__name">{name}</div>
                        <div className="item__category category">

                            <div className="category__item">
                                {category.name}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="item__control">
                    <div className="item__description">{description}</div>
                    <div className="item__price">{price} &#36;</div>
                    <div className="item__discount">{discount} &#37;</div>

                    <div className="item__buttons">
                        <button className="item__change" onClick={() => onEditPopupClick()}></button>
                        <button className="item__delete" onClick={handleDeleteProduct}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;