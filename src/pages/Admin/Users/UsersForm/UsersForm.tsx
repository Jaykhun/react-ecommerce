import React, {FC, useId} from 'react';
import "./UsersForm.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {InputError, UploadFile} from "../../../../components/UI";
import {UsersFormPropsType, FormValues} from "./types";

const UsersForm: FC<UsersFormPropsType> = ({action, user, buttonValue}) => {
    const email = useId()
    const password = useId()
    const user_name = useId()
    const number = useId()
    const first_name = useId()
    const last_name = useId()
    const user_image = useId()
    const street_address = useId()
    const postal_code = useId()
    const city = useId()
    const country_name = useId()

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<FormValues>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        user
            ? action(user)
            : action(data)
        reset();
    }

    return (
        <form className="all-users__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__inner">
                <div className="form__info">
                    <div className="form__email">
                        <label htmlFor={email} className="input-text">Email</label>
                        <input type="email"
                               id={email}
                            // defaultValue={user && user.email}
                               className="input-style"
                               {...register('email', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.email && <InputError message={errors.email.message}/>}
                    </div>

                    <div className="form__password">
                        <label htmlFor={password} className="input-text">Пароль</label>
                        <input type="password"
                               id={password}
                            // defaultValue={user && user.password}
                               className="input-style"
                               {...register('password', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.password && <InputError message={errors.password.message}/>}
                    </div>

                    <div className="form__name">
                        <label htmlFor={user_name} className="input-text">Логин</label>
                        <input type="text"
                               id={user_name}
                               defaultValue={user && user.username}
                               className="input-style"
                               {...register('user_name', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.user_name && <InputError message={errors.user_name.message}/>}
                    </div>

                    <div className="form__firstName">
                        <label htmlFor={first_name} className="input-text">Имя</label>
                        <input type="text"
                               id={first_name}
                               defaultValue={user && user.user_detail.first_name}
                               className="input-style"
                               {...register('first_name', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.first_name && <InputError message={errors.first_name.message}/>}
                    </div>

                    <div className="form__lastName">
                        <label htmlFor={last_name} className="input-text">Фамилия</label>
                        <input type="text"
                               id={last_name}
                               defaultValue={user && user.user_detail.last_name}
                               className="input-style"
                               {...register('last_name', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.last_name && <InputError message={errors.last_name.message}/>}
                    </div>

                    <div className="form__number">
                        <label htmlFor={number} className="input-text">Телефон</label>
                        <input type="number"
                               id={number}
                               defaultValue={user && user.phone_numbers[0].phone_number}
                               className="input-style"
                               {...register('number', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.number && <InputError message={errors.number.message}/>}
                    </div>
                </div>

                <div className="form__body">
                    <div className="form__city">
                        <label htmlFor={city} className="input-text">Город</label>
                        <input type="text"
                               id={city}
                               className="input-style"
                               {...register('city', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.city && <InputError message={errors.city.message}/>}
                    </div>

                    <div className="form__street">
                        <label htmlFor={street_address} className="input-text">Улица</label>
                        <input type="text"
                               id={street_address}
                               defaultValue={user && user.addresses[0].street_address}
                               className="input-style"
                               {...register('street_address', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.street_address && <InputError message={errors.street_address.message}/>}
                    </div>

                    <div className="form__code">
                        <label htmlFor={postal_code} className="input-text">Почтовый индекс</label>
                        <input type="number"
                               id={postal_code}
                               defaultValue={user && user.addresses[0].postal_code}
                               className="input-style"
                               {...register('postal_code', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        {errors?.postal_code && <InputError message={errors.postal_code.message}/>}
                    </div>

                    <div className="form__image">

                        <UploadFile
                            id={user_image}
                            name={user_image}
                            error={errors}
                            isMulti={false}
                            props={
                                {
                                    ...register('user_image', {
                                        required: 'Поле обязательно к заполнению',
                                    })
                                }
                            }
                        />
                    </div>
                </div>
            </div>
            {user ? <button disabled={!isDirty}
                            className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
                    {buttonValue}</button>
                : <button className={`btn r-btn w-opacity form__submit`}>{buttonValue}</button>
            }
        </form>
    );
};

export default UsersForm;