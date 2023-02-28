import {ErrorMessage} from "@hookform/error-message"
import jwtDecode from "jwt-decode"
import {SubmitHandler, useForm} from "react-hook-form"
import {Navigate} from 'react-router-dom'
import {ActionLoader, InputError, ActionAlert} from '../../components/UI'
import {useActions} from "../../hooks/useActions"
import {useLoginUserMutation} from "../../store/api/user/userApi"
import {LoginType} from "../../store/api/user/userTypes"
import {tokenType} from '../../store/reducers/tokenSlice'
import "./Login.scss"

const Login = () => {
    const {onSignInClick, login} = useActions()
    const [loginUser, {data: token, error, isLoading, isSuccess, isError: tokenError}] = useLoginUserMutation()

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm<LoginType>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        loginUser(data)
        reset()
    }

    if (isSuccess && token) {
        login(token.access_token)
        const decode: tokenType = jwtDecode(token.access_token)

        if (decode.is_admin) {
            return <Navigate to="/admin" replace={true}/>
        } else if (decode.is_admin === 0) {
            console.log(1)
            return <Navigate to="/profile" replace={true}/>
        }
    }

    return <>
        <div className='login'>
            <form className="signin-popup" onSubmit={handleSubmit(onSubmit)}>
                <div className="signin-popup__inner">
                    <div className="signin-popup__contacts">
                        <button className="popup__close signin-popup__close"
                                onClick={() => onSignInClick()}></button>
                        <div className="signin__body">
                            <div className="signin__title">Админ Панель</div>
                            <form className="signin__form">
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
            {isLoading && <ActionLoader/>}
            {tokenError && <ActionAlert message='Ошибка' error={error}/>}
        </div>
    </>
}

export default Login