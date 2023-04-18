import './Orders.scss'
import OrdersBody from './OrdersBody'

const Orders = () => {
    return (
        <div className='orders'>
            <div className="orders__title">Заказы</div>
            <OrdersBody />
        </div>
    )
}

export default Orders