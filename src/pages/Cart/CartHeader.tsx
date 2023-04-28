import Path from '@/components/Path'

const CartHeader = () => {
  return (
    <div className="cart__header">
        <Path currentPage='корзина'/>
        <div className="cart__title">Корзина</div>
    </div>
  )
}

export default CartHeader