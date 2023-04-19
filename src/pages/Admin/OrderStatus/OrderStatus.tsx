import { OrderStatusBody, OrderStatusHeader } from './index'
import './OrderStatus.scss'

const OrderStatus = () => {
  return (
    <div className='orderStatus'>
        <OrderStatusHeader/>
        <OrderStatusBody/>
    </div>
  )
}

export default OrderStatus