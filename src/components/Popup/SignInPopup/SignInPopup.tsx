import { ErrorMessage } from "@hookform/error-message"
import jwt from "jwt-decode"
import { SubmitHandler, useForm } from "react-hook-form"
import { useActions } from "../../../hooks/useActions"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useLoginUserMutation } from "../../../store/user/userApi"
import { LoginType } from "../../../store/user/userTypes"
import { ActionAlert, ActionLoader, InputError } from "../../UI"
import Popup from "../../UI/Popup/Popup"
import "../../UI/Popup/Popup.scss"
import "./SignInPopup.scss"

const SignInPopup = () => {
    const { onSignInClick } = useActions()
    const { isSignInModuleOpen } = useTypedSelector(state => state.popup)
    const [loginUser, { data: token, error, isLoading, isSuccess, isError }] = useLoginUserMutation()

    const { login, logout } = useActions()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<LoginType>({ mode: 'onBlur' })

    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        loginUser(data)
        reset()
        onSignInClick()
    }

    if (isSuccess) {
        const decode: string = jwt(token.access_token)
        login(decode)
    }

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
                                <form action="#" className="signin__form">
                                    <div className="signin__login">
                                        <label htmlFor="signin__login" className="input-text">Логин</label>
                                        <input type="text"
                                            id="signin__login"
                                            className="signin__login input-style"
                                            {...register('username', {
                                                required: 'Поле обязательно к заполнению',
                                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                                            })}
                                        />

                                        <ErrorMessage name={'username'}
                                            errors={errors}
                                            render={({ message }) => <InputError message={message} />}
                                        />
                                    </div>

                                    <div className="signin__password">
                                        <label htmlFor="signin__password" className="input-text">Пароль</label>
                                        <input type="password"
                                            id="signin__password"
                                            className="signin__login input-style"
                                            {...register('password', {
                                                required: 'Поле обязательно к заполнению',
                                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                                            })}
                                        />

                                        <ErrorMessage name={'password'}
                                            errors={errors}
                                            render={({ message }) => <InputError message={message} />}
                                        />
                                    </div>
                                </form>
                                <div className="signin__footer">
                                    <a href="#" className="signin__forgot">Забыли пароль?</a>
                                    <button className="signin__submit btn r-btn w-opacity">Войти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Popup>

            {isLoading && <ActionLoader />}
            {isSuccess && <ActionAlert message={'Вы успешно вошли в аккаунт'} success={true} />}
        </>
    )
}

export default SignInPopup