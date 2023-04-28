import { Modal } from '@/components/UI'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import './CartModal.scss'

const CartModal = () => {
    const { closeCartModal } = useServiceActions()
    const { isCartModalOpen } = useTypedSelector(state => state.userCart)

    const modalState = {
        isLoading: false
    }

    const handleClose = () => closeCartModal()

    return (
        <Modal isOpen={isCartModalOpen} state={modalState} handleClose={closeCartModal}>
            <div className='cart-modal'>
                <div className="cart-modal__body">
                    <div className="cart-modal__title">Упсс</div>

                    <div className="cart-modal__content">
                        <div className="cart-modal__txt">
                            Похоже у вас нет аккаунта, пожалуйста
                            <span><Link to={'/registration'} onClick={handleClose}>зарегистрируйтесь</Link></span>
                            если есть то <span> <Link to={'/login'} onClick={handleClose}>войдите</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CartModal