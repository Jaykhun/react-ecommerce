import {ActionLoader, InputError, Popup} from "../UI";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./CallBack.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICallBack} from "../../store/api/callBack/callBackType";
import {ErrorMessage} from "@hookform/error-message";
import {useAddCallBackMutation} from "../../store/api/callBack/callBack";

const CallBack = () => {
    const {onCallBackClick} = useActions()
    const {isCallBackOpen} = useTypedSelector(state => state.popup)
    const [addCallBack, result] = useAddCallBackMutation()

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ICallBack>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<ICallBack> = async (data) => {
        try {
            await addCallBack(data).unwrap()
            onCallBackClick()
            reset()
            alert('Ваш званок был принят')
        } catch (e: any) {
            alert(e.data.detail)
        }
    }

    return (
        <>
            <Popup isOpen={isCallBackOpen} onClose={onCallBackClick}>
                <div className="popup-callback">
                    <div className="popup-callback__inner">
                        <div className="popup-callback__title">Обратный Званок</div>
                    </div>

                    <form className="popup-callback__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="popup-callback__name">
                            <label htmlFor="name" className="input-text">Имя</label>
                            <input type="text"
                                   id="name"
                                   className="input-style"
                                   {...register('full_name', {
                                       required: 'Поле обязательно к заполнению',
                                       minLength: {value: 5, message: 'Минимум 5 символов'},
                                       maxLength: {value: 20, message: 'Максимум 20 символов'}
                                   })}
                            />

                            <ErrorMessage name={'full_name'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <div className="popup-callback__number">
                            <label htmlFor="tel" className="input-text">Телефон</label>
                            <input type="number"
                                   id="tel"
                                   className="input-style"
                                   {...register('phone_number', {
                                       valueAsNumber: true,
                                       required: 'Поле обязательно к заполнению',
                                       minLength: {value: 5, message: 'Минимум 5 символов'},
                                       maxLength: {value: 20, message: 'Максимум 20 символов'}
                                   })}
                            />

                            <ErrorMessage name={'phone_number'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <div className="popup-callback__time">
                            <label htmlFor="name" className="input-text">Выберите время</label>
                            <input type="time"
                                   id="time"
                                   className="input-style"
                                   {...register('start_time', {
                                       required: 'Поле обязательно к заполнению'
                                   })}
                            />

                            <ErrorMessage name={'start_time'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />

                            <input type="time"
                                   id="time"
                                   className="input-style"
                                   {...register('end_time', {
                                       required: 'Поле обязательно к заполнению'
                                   })}
                            />

                            <ErrorMessage name={'end_time'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <div className="popup-callback__comment">
                            <label htmlFor="comment" className="input-text">Обращение</label>
                            <textarea
                                id="comment"
                                className="input-style"
                                {...register('comment', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {value: 5, message: 'Минимум 5 символов'},
                                    maxLength: {value: 100, message: 'Максимум 100 символов'}
                                })}
                            ></textarea>

                            <ErrorMessage name={'comment'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <button className="popup-callback__submit btn r-btn q-opacity">Отправить</button>
                    </form>
                </div>
            </Popup>
            {result.isLoading && <ActionLoader/>}
        </>
    );
};

export default CallBack;