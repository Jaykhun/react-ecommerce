import { Loader } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { FetchOrderStatus } from '@/models/orderStatusTypes'
import { orderStatusApi } from '@/store/api/order'
import { Notify } from 'notiflix'
import { FC } from 'react'
import './OrderStatusItem.scss'

interface OrderStatusItemProps {
    orderStatus: FetchOrderStatus
}

const OrderStatusItem: FC<OrderStatusItemProps> = ({ orderStatus }) => {
    const { id, status } = orderStatus
    const { openOrderStatusEditModal } = useActions()

    const [deleteOrderStatus, result] = orderStatusApi.useDeleteOrderStatusMutation()

    const handleEdit = () => openOrderStatusEditModal(id)
    const handleDelete = async () => {
        try {
            await deleteOrderStatus(id).unwrap()
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

    return (
        <>
            <div className='orderStatus__item item-orderStatus'>
                <div className="item-orderStatus__body">
                    <div className="item-orderStatus__status">
                        {status}
                    </div>
                </div>

                <div className="item-orderStatus__actions">
                    <div className="item-orderStatus__edit" onClick={handleEdit}></div>
                    <div className="item-orderStatus__delete" onClick={handleDelete}></div>
                </div>
            </div>
            {result.isLoading && <Loader isLoading={result.isLoading} />}
        </>

    )
}

export default OrderStatusItem