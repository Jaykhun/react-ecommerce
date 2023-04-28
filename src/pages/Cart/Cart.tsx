import './Cart.scss'
import { CartBody, CartHeader, CartModal } from './index'

const Cart = () => {
    return (
        <div className='cart'>
            <CartHeader />
            <CartBody />
            <CartModal/>
        </div>
    )
}

export default Cart