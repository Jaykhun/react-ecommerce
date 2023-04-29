import { Skeleton } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { FetchOrder } from '@/models/orderTypes'
import countryApi from '@/store/api/country'
import { orderApi } from '@/store/api/order'
import userApi from '@/store/api/user'
import { Notify } from 'notiflix'
import { FC } from 'react'
import './OrdersItem.scss'

interface OrdersItemProps {
  order: FetchOrder
}

const OrdersItem: FC<OrdersItemProps> = ({ order }) => {
  const { user_id, order_date, address_id, order_details, order_status, id } = order
  const { openOrderEditModal, openOrderDetailsModal } = useActions()

  const user = userApi.useGetSingleUserQuery(user_id, { skip: !user_id })
  const country = countryApi.useGetSingleCountryQuery(address_id, { skip: !address_id })
  const [deleteOrder, { isLoading }] = orderApi.useDeleteOrderMutation()

  const handleView = () => openOrderDetailsModal(order_details)
  const handleEdit = () => openOrderEditModal(order_status.id)
  const handleDelete = async () => {
    try {
      await deleteOrder({ userId: user_id, orderId: id }).unwrap()
      Notify.success(`Успешно удален`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
    }

    catch (e: any) {
      Notify.failure(`Ошибка при удаление, статус: ${e.status}`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
    }
  }

  if (isLoading) return <Skeleton isLoading={isLoading} />

  return (
    <div className='orders__item item-orders'>
      <div className="item-orders__body">
        <div className="item-orders__username">{user.data?.username}</div>
        <div className="item-orders__products">
          <div className="item-orders__view" onClick={handleView}>
            <span>Товары </span>
            <span className='icon-view'></span>
          </div>
        </div>
        <div className="item-orders__address">{country.data?.country_name}</div>
        <div className="item-orders__status">{order_status.status}</div>
        <div className="item-orders__date">{order_date}</div>
      </div>

      <div className="item-orders__actions">
        <div className="item-orders__edit" onClick={handleEdit}></div>
        <div className="item-orders__delete" onClick={handleDelete}></div>
      </div>
    </div>
  )
}

export default OrdersItem