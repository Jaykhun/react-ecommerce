import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchOrderStatus } from '@/models/orderStatusTypes'
import { EditOrder } from '@/models/orderTypes'
import { orderApi, orderStatusApi } from '@/store/api/order'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'
import './OrdersEdit.scss'

const OrdersEdit = () => {
    const { closeOrderEditModal } = useActions()
    const { orderId, isOpenEditModal } = useTypedSelector(state => state.orderSlice)
    const { register, formState: { errors, isDirty }, reset, control, handleSubmit } = useForm<EditOrder>({ mode: 'onBlur' })

    const { data: status, isFetching, isError: statusIsError, error: statusError } = orderStatusApi.useGetSingleOrderQuery(orderId, { skip: !orderId })
    const allStatus = orderStatusApi.useGetAllOrdersStatusQuery()
    const [editOrder, result] = orderApi.useEditOrderMutation()

    const currentStatus = allStatus.data?.find(status => status.id === orderId)

    const modalState = {
        isLoading: isFetching || result.isLoading,
        isError: statusIsError || result.isError,
        error: statusError || result.error
    }

    useEffect(() => {
        reset()
    }, [status])

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = allStatus.data?.filter((option: FetchOrderStatus) =>
            option.status.toLowerCase().includes(searchValue.toLowerCase())
        )

        callback(filteredOptions)
    }

    const onSubmit: SubmitHandler<EditOrder> = async (data) => {
        try {
            await editOrder({ data: data, id: orderId }).unwrap()
            Notify.success(`Заказ успешно изменен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeOrderEditModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при изменение заказа, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeOrderEditModal}>
            <div className='orders-edit'>
                <div className="orders-edit__body">
                    <div className="orders-edit__title">Изменить данные</div>

                    <form className="orders-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="orders-edit__status">
                            <label htmlFor='category' className='input__label'>Категории</label>
                            {allStatus.isLoading
                                ? <Message formError='Идет загрузка статусов...' />
                                : allStatus.isError
                                    ? <Message error={allStatus.error} formError='Не удалось загузить статусов' />
                                    : <Controller
                                        control={control}
                                        {...register('order_status_id', {
                                            required: 'Поле обязательно к заполнению',
                                        })}
                                        render={({ field }) => ((
                                            <AsyncSelect
                                                id='category'
                                                classNamePrefix='select-styles'
                                                components={makeAnimated()}
                                                placeholder={false}
                                                defaultValue={currentStatus}
                                                defaultOptions
                                                loadOptions={loadOptions}
                                                onBlur={field.onBlur}
                                                getOptionValue={value => value.status}
                                                getOptionLabel={value => value.status}
                                                onChange={(newValue: any) => field.onChange(newValue.id)}
                                                value={allStatus.data?.find((value: FetchOrderStatus) => value.id === field.value)}
                                            />
                                        ))}
                                    />
                            }
                        </div>

                        <Button hoverEffect disabled={!isDirty}>Изменить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default OrdersEdit