import { FetchProduct } from '@/models/productTypes'
import { calculateDiscount } from '@/utils/calculateDiscount'
import { FC } from 'react'
import './ProductItem.scss'

interface ProductItemProps {
    product: FetchProduct
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const { name, id, images, quantity, discount, price } = product

    return (
        <div className='product__item item-product'>
            <div className="item-product__img">
                <img src={images[0].image_path} alt={name} />
                {discount
                    ? <div className="item-product__discount">-{discount} %</div>
                    : ''
                }
            </div>

            <div className="item-product__info">
                <div className="item-product__content">
                    <div className="item-product__name">{name}</div>
                    <div className="item-product__price">
                        {discount
                            ? calculateDiscount(price, discount)
                            : price
                        } $
                    </div>
                </div>

                <div className="item-product__sale">{quantity > 0 ? 'sale' : 'not sale'}</div>
            </div>
        </div>
    )
}

export default ProductItem