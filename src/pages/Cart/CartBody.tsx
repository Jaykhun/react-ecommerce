import { Message } from '@/components/UI'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

const CartBody = () => {
    const { clearProduct } = useServiceActions()
    const { products, totalPrice } = useTypedSelector(state => state.userCart)

    const handleClear = () => clearProduct()

    return (
        <div className="cart__body">
            <div className="cart__content">
                <div className="cart__inner">
                    <div className="cart__products products-cart">
                        <div className="cart__head">
                            <div className="cart__heading">Товар</div>

                            <div className="cart__heading">
                                <span>Цена</span>
                                <span>Кол-во</span>
                                <span>Сумма</span>
                            </div>
                        </div>

                        <div className="products-cart__body">
                            {
                                products.length
                                    ? products.map(product => <CartItem product={product} key={product.id} />)
                                    : <Message value='нет продуктов' />
                            }
                        </div>
                    </div>

                    <div className="cart__footer">
                        <Link to={'/'} className="cart__back">
                            К покупкам
                        </Link>
                        <div className="cart__clear" onClick={handleClear}>
                            Очистить корзину
                        </div>
                    </div>
                </div>

                <div className="cart__total total-cart">
                    <div className="total-cart__header">
                        <div className="total-cart__title">Расчет</div>
                    </div>
                    <div className="total-cart__sum">
                        <div className="total-cart__total">Итого:</div>
                        <div className="total-cart__price">{totalPrice} $</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBody