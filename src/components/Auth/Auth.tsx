import {ErrorMessage} from "@hookform/error-message"
import {SubmitHandler, useForm} from "react-hook-form"
import {useActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useLoginUserMutation} from "../../store/api/user/userApi"
import {LoginType} from "../../store/api/user/userTypes"
import {ActionLoader, InputError} from "../UI"
import Popup from "../UI/Popup/Popup"
import {useEffect} from "react";
import "./Auth.scss"

const Auth = () => {
    const {onSignInClick, login} = useActions()
    const {isSignInModuleOpen} = useTypedSelector(state => state.popup)
    const [loginUser, {data: token, isLoading, isSuccess}] = useLoginUserMutation()

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm<LoginType>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        try {
            await loginUser(data).unwrap()
            reset()
            onSignInClick()
            alert('Добро пожаловать')
        } catch (e: any) {
            alert(e.data.detail)
        }
    }

    useEffect(() => {
        if (isSuccess && token) {
            login(token.access_token)
        }
    }, [token])

    return (
        <>
            <Popup isOpen={isSignInModuleOpen} onClose={onSignInClick}>
                <form className="signin-popup" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signin-popup__inner">
                        <div className="signin-popup__contacts">
                            <button className="popup__close signin-popup__close"
                                    onClick={() => onSignInClick()}></button>
                            <div className="signin__body">
                                <div className="signin__title">Кабинет</div>
                                <form action="src/components/Auth/SignInPopup#Auth.tsx" className="signin__form">
                                    <div className="signin__login">
                                        <label htmlFor="signin__login" className="input-text">Логин</label>
                                        <input type="text"
                                               id="signin__login"
                                               className="signin__login input-style"
                                               {...register('username', {
                                                   required: 'Поле обязательно к заполнению',
                                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                                               })}
                                        />

                                        <ErrorMessage name={'username'}
                                                      errors={errors}
                                                      render={({message}) => <InputError message={message}/>}
                                        />
                                    </div>

                                    <div className="signin__password">
                                        <label htmlFor="signin__password" className="input-text">Пароль</label>
                                        <input type="password"
                                               id="signin__password"
                                               className="signin__login input-style"
                                               {...register('password', {
                                                   required: 'Поле обязательно к заполнению',
                                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                                               })}
                                        />

                                        <ErrorMessage name={'password'}
                                                      errors={errors}
                                                      render={({message}) => <InputError message={message}/>}
                                        />
                                    </div>
                                </form>
                                <div className="signin__footer">
                                    <button className="signin__submit btn r-btn w-opacity">Войти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Popup>

            {isLoading && <ActionLoader/>}
        </>
    )
}

export default Auth