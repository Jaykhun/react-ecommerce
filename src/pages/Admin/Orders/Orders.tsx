import { OrdersBody, OrdersEdit, OrdersHeader, OrdersView } from './index'
import './Orders.scss'

const Orders = () => {
    return (
        <div className='orders'>
            <OrdersHeader />
            <OrdersBody />
            <OrdersEdit />
            <OrdersView />
        </div>
    )
}

export default Orders