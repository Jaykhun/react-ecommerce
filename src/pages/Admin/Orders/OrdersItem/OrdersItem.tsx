import { FetchOrder } from '@/models/orderTypes'
import countryApi from '@/store/api/country'
import userApi from '@/store/api/user'
import { FC } from 'react'
import './OrdersItem.scss'

interface OrdersItemProps {
  order: FetchOrder
}
const OrdersItem: FC<OrdersItemProps> = ({ order }) => {
  const { user_id, order_date, address_id, order_details, order_status } = order

  const { data: user, isLoading: userisLoading, isError: userisError, error: usererror } = userApi.useGetSingleUserQuery(user_id, { skip: !user_id })
  const { data: country, isLoading: countryisLoading, isError: countryisError, error: countryError } = countryApi.useGetSingleCountryQuery(address_id, { skip: !address_id })

  return (
    <div className='orders__item item-orders'>
      <div className="item-orders__body">
        <div className="item-orders__username">{user?.username}</div>
        <div className="item-orders__products">{}</div>
        <div className="item-orders__address">{country?.country_name}</div>
        <div className="item-orders__status"></div>
        <div className="item-orders__date">{order_date}</div>
      </div>

      <div className="item-orders__actions">
        <div className="item-orders__edit"></div>
        <div className="item-orders__delete"></div>
      </div>
    </div>
  )
}

export default OrdersItem