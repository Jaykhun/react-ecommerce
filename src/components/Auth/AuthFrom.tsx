import React from 'react';
import {ErrorMessage} from "@hookform/error-message";
import {ActionLoader, InputError} from "../UI";
import {useLoginUserMutation} from "../../store/api/user/userApi";
import {useActions} from "../../hooks/useActions";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginType} from "../../store/api/user/userTypes";
import jwtDecode from "jwt-decode";

const AuthFrom = () => {
    const {onSignInClick} = useActions()
    const [loginUser, {data: token, error, isLoading, isSuccess, isError}] = useLoginUserMutation()

    const {login} = useActions()

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
        const decode: any = jwtDecode(token.access_token)
    }
    return (
        <>
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
                                <a href="src/components/Auth/SignInPopup#Auth.tsx" className="signin__forgot">Забыли
                                    пароль?</a>
                                <button className="signin__submit btn r-btn w-opacity">Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {isLoading && <ActionLoader/>}
        </>
    );
};

export default AuthFrom;