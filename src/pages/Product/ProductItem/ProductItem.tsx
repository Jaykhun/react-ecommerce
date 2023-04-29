import { FetchProduct } from '@/models/productTypes'
import { calcDiscount } from '@/utils/calcDiscount'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductItem.scss'

interface ProductItemProps {
    product: FetchProduct
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const { name, id, images, quantity, discount, price } = product
    const navigate = useNavigate()
    
    const handleNavigate = () => navigate(`/product/${id}`)

    return (
        <div className='product__item item-product'>
            <div className="item-product__img">
                <img src={images[0].image_path} alt={name} />
                {discount
                    ? <div className="item-product__discount">-{discount} %</div>
                    : ''
                }
            </div>

            <div className="item-product__info" onClick={handleNavigate}>
                <div className="item-product__content">
                    <div className="item-product__name">{name}</div>
                    <div className="item-product__price">
                        {discount
                            ? calcDiscount(price, discount)
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