import { Loader, Message } from '@/components/UI'
import ordersApi from '@/store/api/orders'
import OrdersItem from './OrdersItem'

const OrdersBody = () => {
    const { data: orders, isFetching, isError, error } = ordersApi.useGetAllOrdersQuery()

    return (
        <div className='orders__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : orders?.length
                            ? orders?.map(order => <OrdersItem order={order} key={order.id} />)
                            : <Message value='нет звонков' />
            }
        </div>
    )
}

export default OrdersBody