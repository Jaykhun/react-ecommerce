import { Button, Loader, Message } from '@/components/UI'
import { getToken } from '@/helpers/getToken'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { AddOrder } from '@/models/orderTypes'
import { WebStoragePath } from '@/models/userServiceType'
import { orderApi } from '@/store/api/order'
import userApi from '@/store/api/user'
import { getCurrentFormattedDate } from '@/utils/formatDate'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartBody = () => {
    const { clearProduct, countTotalPrice, openCartModal } = useServiceActions()
    const { products, totalPrice } = useTypedSelector(state => state.userCart)
    const token = getToken(WebStoragePath.token)

    const users = userApi.useGetAllUsersQuery()
    const [addOrder, { isLoading }] = orderApi.useAddOrderMutation()

    useEffect(() => {
        countTotalPrice()
    }, [products])

    const checkOrder = () => {
        if (token && users.isSuccess) {
            const user = users.data.find(user => user.username === token.sub)
            const order: AddOrder = {
                order: {
                    user_id: Number(user?.id),
                    order_date: getCurrentFormattedDate(),
                    address_id: Number(user?.addresses[0].id),
                    order_status_id: 1
                },

                order_details: products.map(product => ({
                    product_id: product.id,
                    quantity: product.quantity,
                    price: product.price
                }))
            }

            handleBuy(order)
        }

        else openCartModal()
    }

    const handleClear = () => clearProduct()

    const handleBuy = async (product: AddOrder) => {
        try {
            await addOrder(product).unwrap()
            Notify.success('Заказ принять', {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            handleClear()
        }

        catch (e: any) {
            Notify.failure(`Ошибка, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    if (isLoading) return <Loader isLoading={isLoading} />

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
                    <div className="total-cart__content">
                        <div className="total-cart__header">
                            <div className="total-cart__title">Расчет</div>
                        </div>
                        <div className="total-cart__sum">
                            <div className="total-cart__total">Итого:</div>
                            <div className="total-cart__price">{totalPrice} $</div>
                        </div>
                    </div>

                    <div className="total-cart__buy" onClick={checkOrder}>
                        <Button hoverEffect disabled={!products.length}>Оформить заказ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBody