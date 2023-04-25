import { OrderStatusAdd, OrderStatusBody, OrderStatusEdit, OrderStatusHeader } from './index'
import './OrderStatus.scss'

const OrderStatus = () => {
  return (
    <div className='orderStatus'>
      <OrderStatusHeader />
      <OrderStatusBody />
      <OrderStatusAdd />
      <OrderStatusEdit />
    </div>
  )
}

export default OrderStatus