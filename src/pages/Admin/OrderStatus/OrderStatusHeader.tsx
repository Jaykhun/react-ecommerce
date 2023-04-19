import { Button } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const OrderStatusHeader = () => {
  const { openOrderStatusAddModal } = useActions()
  const handleAdd = () => openOrderStatusAddModal()

  return (
    <>
      <div className="orderStatus__title">Статус заказов</div>
      <div className="orderStatus__header">
        <div className="orderStatus__search">
          <input
            type='search'
            placeholder='Искать...'
            className='input__style'
          />
        </div>

        <div className='orderStatus__add' onClick={handleAdd}>
          <Button hoverEffect>Добавить</Button>
        </div>
      </div>
    </>
  )
}

export default OrderStatusHeader