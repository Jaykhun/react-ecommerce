import React, {FC} from 'react';
import {IProduct} from "../../../../store/product/productTypes";
import {useDeleteProductMutation} from "../../../../store/product/productApi";
import {useActions} from "../../../../hooks/useActions";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {v4 as keyId} from "uuid"

import "swiper/css";
import "swiper/css/pagination";
import "./ProductsItem.scss";
import "../Slider.scss"

interface ProductsItemProps {
    product: IProduct
}

const ProductsItem: FC<ProductsItemProps> = ({product}) => {
    const {onProductEditPopupClick, productEdit} = useActions()
    const {name, id, price, description, discount, images, category} = product
    const [deleteProduct] = useDeleteProductMutation()

    const onEdit = () => {
        onProductEditPopupClick()
        product && productEdit(id)
    }

    const handleDeleteProduct = async () => {
        await deleteProduct(id)
    }

    return (
        <div className="all-products__item item">
            <div className="item__inner">
                <div className="item__info">
                    <div className="item__images">
                        <Swiper
                            pagination={{dynamicBullets: true}}
                            modules={[Pagination]}
                            className="productSwiper"
                        >
                            {images.map(pImage =>
                                <SwiperSlide key={keyId()}>
                                    <img src={pImage.image_path} alt={name}/>
                                </SwiperSlide>)}
                        </Swiper>
                    </div>

                    <div className="item__title">
                        <div className="item__name">{name}</div>
                        <div className="item__category category">

                            <div className="category__item">
                                {category.name}
                            </div>

                            {category.children_category.map(c =>
                                <div className="category__children" key={keyId()}>{c.name}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="item__control">
                    <div className="item__description">{description}</div>
                    <div className="item__price">{price} &#36;</div>
                    <div className="item__discount">{discount} &#37;</div>

                    <div className="item__buttons">
                        <button className="item__change" onClick={onEdit}></button>
                        <button className="item__delete" onClick={handleDeleteProduct}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;