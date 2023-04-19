import { Loader, Message } from '@/components/UI'
import { orderStatusApi } from '@/store/api/order'
import OrderStatusItem from './OrderStatusItem'

const OrderStatusBody = () => {
    const { data: orderStatus, isFetching, isError, error } = orderStatusApi.useGetAllOrdersStatusQuery()

  return (
   <div className='orderStatus__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : orderStatus?.length
                            ? orderStatus.map(orderStatus => <OrderStatusItem orderStatus={orderStatus} key={orderStatus.id} />)
                            : <Message value='нет звонков' />
            }
        </div>
  )
}

export default OrderStatusBody