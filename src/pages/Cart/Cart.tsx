import { useTypedSelector } from '@/hooks/useTypedSelector'
import './Cart.scss'

const Cart = () => {
    const { products } = useTypedSelector(state => state.userCart)

    
    return (
        <div>Cart</div>
    )
}

export default Cart