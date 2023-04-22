import './Orders.scss'
import { OrdersBody, OrdersHeader } from './index'

const Orders = () => {
    return (
        <div className='orders'>
            <OrdersHeader/>
            <OrdersBody />
        </div>
    )
}

export default Orders