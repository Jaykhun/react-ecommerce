import React, {FC, useCallback, useId} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message/dist";
import {InputError} from "../../../../components/UI";
import {UsersFormPropsType} from "./types";
import {useAddUserMutation, useUpdateUserMutation, useGetSingleUserQuery} from "../../../../store/user/userApi";
import {IUser} from "../../../../store/user/userTypes";
import {useGetAllCountriesQuery} from '../../../../store/country/countryApi';
import {useActions} from '../../../../hooks/useActions';
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import "./UsersForm.scss";

const UsersForm: FC<UsersFormPropsType> = ({id, buttonValue}) => {
    const user_name = useId()
    const password = useId()
    const number = useId()
    const first_name = useId()
    const last_name = useId()
    const user_image = useId()
    const street_address = useId()
    const postal_code = useId()
    const city = useId()
    const country_name = useId()

    const {data: countries} = useGetAllCountriesQuery()
    const {data: user, isSuccess} = useGetSingleUserQuery(id, {skip: !id})
    const {data} = useGetAllCountriesQuery()
    const [updateUser] = useUpdateUserMutation()
    const [addUser] = useAddUserMutation()

    const initialValue = {
        username: isSuccess ? user.username : '',
        password: isSuccess ? user.password : '',
        is_admin: isSuccess ? user.is_admin : false,
        user_detail: {
            first_name: isSuccess ? user.user_detail.first_name : '',
            last_name: isSuccess ? user.user_detail.last_name : '',
            user_image: isSuccess ? user.user_detail.user_image : ''
        },
        phone_numbers: [{
            phone_number : isSuccess ? user.phone_numbers[0].phone_number : '',
            type: 'phone'
        }],
        addresses: [{
            street_address: isSuccess ? user.addresses[0].street_address : '',
            postal_code: isSuccess ? user.addresses[0].postal_code : '',
            city: isSuccess ? user.addresses[0].city : '',
            country: {
                country_name: isSuccess ? user.addresses[0].country.country_name : ''
            }
        }]
    }

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<IUser>({mode: 'onBlur', defaultValues: initialValue})

    const {onUserEditPopupClick} = useActions()
    const animatedComponents = makeAnimated()

    const loadOptions = useCallback(
        (searchValue: string, callback: any) => {
            const filteredOptions = countries?.filter((option: any) =>
                option.country_name.toLowerCase().includes(searchValue.toLowerCase())
            )

            callback(filteredOptions)
        }, [countries])

    const onSubmit: SubmitHandler<IUser> = useCallback((data) => {
        console.log(data)

        if (user) {
            updateUser(data)
            onUserEditPopupClick()
        } else {
            addUser(data)
        }

        reset()
    }, [])


    return (
        <form className="all-users__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__inner">
                <div className="form__info">
                    <div className="form__name">
                        <label htmlFor={user_name} className="input-text">Логин</label>
                        <input type="text"
                               id={user_name}
                               className="input-style"
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

                    <div className="form__password">
                        <label htmlFor={password} className="input-text">Пароль</label>
                        <input type="password"
                               id={password}
                               className="input-style"
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

                    <div className="form__firstName">
                        <label htmlFor={first_name} className="input-text">Имя</label>
                        <input type="text"
                               id={first_name}
                               className="input-style"
                               {...register('user_detail.first_name', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'user_detail.first_name'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__lastName">
                        <label htmlFor={last_name} className="input-text">Фамилия</label>
                        <input type="text"
                               id={last_name}
                               className="input-style"
                               {...register('user_detail.last_name', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'user_detail.last_name'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__number">
                        <label htmlFor={number} className="input-text">Телефон</label>
                        <input type="number"
                               id={number}
                               className="input-style"
                               {...register('phone_numbers.0.phone_number', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'phone_numbers.0.phone_number'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>
                </div>

                <div className="form__body">
                    <div className="form__country">
                        <Controller
                            control={control}
                            name={'addresses.0.country'}
                            rules={
                                {required: 'Поле обязательно к заполнению'}
                            }
                            render={({field}) =>
                                <>
                                    <label htmlFor={country_name} className="custom-select__label">Выберите
                                        страну</label>
                                    <AsyncSelect
                                        id={country_name}
                                        name={field.name}
                                        classNamePrefix="custom-select"
                                        placeholder={false}
                                        components={animatedComponents}
                                        onBlur={field.onBlur}
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={loadOptions}
                                        getOptionValue={value => value.country_name}
                                        getOptionLabel={value => value.country_name}
                                        value={data?.find((c: any) => c.name === field.value)}
                                        onChange={newValue => field.onChange?.(newValue)}
                                    />
                                </>
                            }
                        />

                        <ErrorMessage name={'addresses.0.country.country_name'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>
                    <div className="form__city">
                        <label htmlFor={city} className="input-text">Город</label>
                        <input type="text"
                               id={city}
                               className="input-style"
                               {...register('addresses.0.city', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.0.city'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__street">
                        <label htmlFor={street_address} className="input-text">Улица</label>
                        <input type="text"
                               id={street_address}
                               className="input-style"
                               {...register('addresses.0.street_address', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.0.street_address'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__code">
                        <label htmlFor={postal_code} className="input-text">Почтовый индекс</label>
                        <input type="number"
                               id={postal_code}
                               className="input-style"
                               {...register('addresses.0.postal_code', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.0.postal_code'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__image">
                        <div className="file">
                            <label htmlFor={user_image} className="input-text">Картика</label>
                            <input
                                type="text"
                                id={user_image}
                                className="input-style"
                                {...register(
                                    'user_detail.user_image',
                                    {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: {value: 1, message: 'Добавитье ссылку'},
                                    }
                                )}
                            />
                            <ErrorMessage name={'addresses.user_image'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>
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