import './Cart.scss'
import { CartBody, CartHeader } from './index'

const Cart = () => {
    return (
        <div className='cart'>
            <CartHeader />
            <CartBody />
        </div>
    )
}

export default Cart