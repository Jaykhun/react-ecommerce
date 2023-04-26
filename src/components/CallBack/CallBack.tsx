import { Button, Message, Modal, PhoneMask } from '@/components/UI'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { AddCall } from '@/models/callTypes'
import callApi from '@/store/api/call'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { SubmitHandler, useForm } from 'react-hook-form'
import './CallBack.scss'

const CallBack = () => {
    const { closeCallBackModal } = useServiceActions()
    const { isCallBackModalOpen } = useTypedSelector(state => state.contactsSlice)
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm<AddCall>({ mode: 'onBlur' })

    const [addCall, result] = callApi.useAddCallMutation()

    const modalState = {
        isLoading: result.isLoading,
        isError: result.isError,
        error: result.error
    }

    const VALIDATION_RULES = {
        required: 'Поле обязательно к заполнению',
        minLength: { value: 5, message: 'Минимум 5 символов' },
        maxLength: { value: 20, message: 'Максимум 20 символов' }
    }

    const onSubmit: SubmitHandler<AddCall> = async (data) => {
        try {
            await addCall(data).unwrap()
            Notify.success('Званок принять, мы свяжемся с вами', {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            closeCallBackModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isCallBackModalOpen} state={modalState} handleClose={closeCallBackModal}>
            <div className='callback'>
                <div className="callback__body">
                    <div className="callback__title">Обратный звонок</div>

                    <form className="callback__form callback-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" callback-form__name">
                            <label htmlFor="name" className='input__label'>Имя</label>
                            <input type="text" id='name' className='input__style'
                                {...register('full_name', VALIDATION_RULES)}
                            />

                            <ErrorMessage name='full_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                        <div className="callback-form__phone">
                            <label htmlFor="phone" className='input__label'>Номер телефона</label>
                            <PhoneMask
                                control={control}
                                props={{ ...register('phone_number', VALIDATION_RULES) }}
                            />

                            <ErrorMessage name='phone_number' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="callback-form__time">
                            <label htmlFor="name" className="input__label">Выберите время</label>
                                <input type="time" id="time" className="input__style"
                                    {...register('start_time', {
                                        required: 'Поле обязательно к заполнению'
                                    })}
                                />

                                <ErrorMessage name={'start_time'}
                                    errors={errors}
                                    render={({ message }) => <Message formError={message} />}
                            />

                            <input type="time" id="time" className="input__style"
                                {...register('end_time', {
                                    required: 'Поле обязательно к заполнению'
                                })}
                            />

                            <ErrorMessage name={'end_time'}
                                errors={errors}
                                render={({ message }) => <Message formError={message} />}
                            />
                        </div>
                        <div className="callback-form__message">
                            <label htmlFor="message" className='input__label'>Сообщение</label>
                            <textarea className='input__style'
                                {...register('comment', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 50, message: 'Максимум 50 символов' }
                                })}
                            />

                            <ErrorMessage name='comment' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button hoverEffect>Отправить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default CallBack