import { Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import './OrdersView.scss'
import OrdersViewItem from './OrdersViewItem'

const OrdersView = () => {
  const { closeOrderDetailsModal } = useActions()
  const { orderDetails, isOpenOrderDetailsModal } = useTypedSelector(state => state.orderSlice)

  const modalState = {
    isLoading: false
  }

  return (
    <Modal isOpen={isOpenOrderDetailsModal} state={modalState} handleClose={closeOrderDetailsModal}>
      <div className='orders-view'>
        <div className="orders-view__body">
          <div className="orders-view__title">Товары</div>

          <div className="orders-view__info">
            {
              orderDetails.map(details =>
                <OrdersViewItem orderDetails={details} key={details.product_id} />
              )
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default OrdersView