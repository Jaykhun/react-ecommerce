import { useServiceActions } from '@/hooks/useServiceActions'
import { CartProduct } from '@/models/userServiceType'
import { calculateDiscount } from '@/utils/calculateDiscount'
import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './CartItem.scss'

interface CartItemProps {
    product: CartProduct
}

const CartItem: FC<CartItemProps> = ({ product }) => {
    const { id, name, images, category, price, count, discount } = product
    const productPrice = discount > 0 ? calculateDiscount(price, discount) : price

    const { increaseProduct, decreaseProduct, deleteProduct } = useServiceActions()

    const handleIncrease = () => increaseProduct(id)
    const handleDecrease = () => decreaseProduct(id)
    const handleDelete = () => deleteProduct(id)

    return (
        <div className="products-cart__item">
            <div className="products-cart__info">
                <div className="products-cart__img">
                    <img src={images[0].image_path} alt={name} />
                </div>
                <div className="products-cart__brand">
                    <div className="products-cart__name">{name}</div>
                    <Link to={`/product/category/${id}`} className="products-cart__category">{category.name}</Link>
                </div>
            </div>
            <div className="products-cart__control">
                <div className="products-cart__price">{productPrice} $</div>
                <div className="products-cart__amount">
                    <div className={clsx('products-cart__descrease', { 'disabled': count < 2 })} onClick={handleDecrease}></div>
                    <div className='products-cart__count'>{count}</div>
                    <div className="products-cart__increase" onClick={handleIncrease}></div>
                </div>
                <div className="products-cart__sum">{productPrice * count} $</div>
                <div className="products-cart__delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default CartItem