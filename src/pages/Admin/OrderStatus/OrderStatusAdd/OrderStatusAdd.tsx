import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { orderStatusApi } from '@/store/api/order'
import { ErrorMessage } from '@hookform/error-message'
import { MutationOrderStatusType } from '@models/orderStatusTypes'
import { Notify } from 'notiflix'
import { SubmitHandler, useForm } from 'react-hook-form'
import './OrderStatusAdd.scss'

const OrderStatusAdd = () => {
    const { closeOrderStatusAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.orderStatusSlice)
    const [addOrderStatus, result] = orderStatusApi.useAddOrderStatusMutation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<MutationOrderStatusType>({ mode: 'onBlur' })

    const modalState = {
        isLoading: result.isLoading
    }

    const onSubmit: SubmitHandler<MutationOrderStatusType> = async (data) => {
        try {
            await addOrderStatus(data).unwrap()
            Notify.success(`${data.status} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            closeOrderStatusAddModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добаление ${data.status}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeOrderStatusAddModal}>
            <div className='orderStatus-add'>
                <div className="orderStatus-add__body">
                    <div className="orderStatus-add__title">Добавить статус</div>

                    <form className="orderStatus-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="orderStatus-add__status">
                            <label htmlFor='status' className='input__label'>Название</label>
                            <input type='text' id='status' className='input__style'
                                {...register('status', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 20, message: 'Максимум 20 символов' }
                                })} />

                            <ErrorMessage name='status' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default OrderStatusAdd