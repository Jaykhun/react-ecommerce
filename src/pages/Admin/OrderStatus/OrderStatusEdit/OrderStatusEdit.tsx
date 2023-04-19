import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { MutationOrderStatusType } from '@/models/orderStatusTypes'
import { orderStatusApi } from '@/store/api/order'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './OrderStatusEdit.scss'

const OrderStatusEdit = () => {
    const { closeOrderStatusEditModal } = useActions()
    const { orderStatusId, isOpenEditModal } = useTypedSelector(state => state.orderStatusSlice)
    const { register, formState: { errors, isDirty }, reset, handleSubmit } = useForm<MutationOrderStatusType>({ mode: 'onBlur' })

    const { data: orderStatus, isError: orderStatusIsError, error: orderStatusError, isFetching } = orderStatusApi.useGetSingleOrderStatusQuery(orderStatusId, { skip: !orderStatusId })
    const [editOrderStatus, result] = orderStatusApi.useEditOrderStatusMutation()

    const modalState = {
        isLoading: isFetching || result.isLoading,
        isError: orderStatusIsError || result.isError,
        error: orderStatusError || result.error
    }

    useEffect(() => {
        reset()
    }, [orderStatus])

    const onSubmit: SubmitHandler<MutationOrderStatusType> = async (data) => {
        try {
            await editOrderStatus({ data: data, id: orderStatusId }).unwrap()
            Notify.success(`Статус успешно изменен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeOrderStatusEditModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при изменение статуса, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeOrderStatusEditModal}>
            <div className='orderStatus-edit'>
                <div className="orderStatus-edit__body">
                    <div className="orderStatus-edit__title">Изменить данные</div>

                    <form className="orderStatus-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="orderStatus-edit__status">
                            <label htmlFor='status' className='input__label'>Название</label>
                            <input type='text' id='status' className='input__style'
                                defaultValue={orderStatus?.status}
                                {...register('status', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 20, message: 'Максимум 20 символов' }
                                })} />

                            <ErrorMessage name='status' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button hoverEffect disabled={!isDirty}>Изменить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default OrderStatusEdit