import { Loader, Message } from '@/components/UI'
import { OrderDetails } from '@/models/orderTypes'
import productApi from '@/store/api/product'
import { FC } from 'react'

interface OrdersViewItemProps {
    orderDetails: OrderDetails
}

const OrdersViewItem: FC<OrdersViewItemProps> = ({ orderDetails }) => {
    const { product_id, price, quantity } = orderDetails
    const { data: product, isLoading, isError, error } = productApi.useGetSingleProductQuery(product_id, { skip: !product_id })

    return (
        <div className='orders-view__item item-view'>
            {isLoading
                ? <Loader isLoading={isLoading} />
                : isError
                    ? <Message error={error} formError='Не удалось загузить товаров' />
                    : <>
                        <div className="item-view__img">
                            <img src={product?.images[0].image_path} alt={product?.name} />
                        </div>

                        <div className="item-view__body">
                            <div className="item-view__name">
                                <span>{product?.name}</span>
                            </div>
                            <div className="item-view__price">
                                <span className='item-view__txt'>Цена: </span>
                                <span>{price} $</span>
                            </div>
                            <div className="item-view__quantity">
                                <span className='item-view__txt'>Количество: </span>
                                <span>{quantity}</span>
                            </div>
                        </div>
                    </>
            }

            <Loader isLoading={isLoading} />
        </div>
    )
}

export default OrdersViewItem