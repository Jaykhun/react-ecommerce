import {FC, useCallback, useId} from 'react';
import "./UsersForm.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {InputError, Select} from "../../../../components/UI";
import {UsersFormPropsType} from "./types";
import {useAddUserMutation, useUpdateUserMutation} from "../../../../store/user/userApi";
import {Address, IUser, PhoneNumber} from "../../../../store/user/userTypes";
import {ErrorMessage} from "@hookform/error-message/dist";
import {useGetAllCountriesQuery} from "../../../../store/country/countryApi";

const UsersForm: FC<UsersFormPropsType> = ({user, buttonValue}) => {
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

    const initialValue: IUser = {
        username: '',
        password: '',
        is_admin: false,
        user_detail: {
            first_name: '',
            last_name: '',
            user_image: ''
        },
        phone_numbers: {} as PhoneNumber,
        addresses: {} as Address
    }

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<IUser>({mode: 'onBlur', defaultValues: initialValue})

    const {data: countries} = useGetAllCountriesQuery()
    const [updateUser] = useUpdateUserMutation()
    const [addUser] = useAddUserMutation()

    const onSubmit: SubmitHandler<IUser> = useCallback((data) => {
        console.log(data)

        user
            ? updateUser(data)
            : addUser(data)

        reset();
    }, [])


    return (
        <form className="all-users__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__inner">
                <div className="form__info">
                    <div className="form__name">
                        <label htmlFor={user_name} className="input-text">Логин</label>
                        <input type="text"
                               id={user_name}
                            // defaultValue={user && user.user.username}
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
                            // defaultValue={user && user.user.password}
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
                            // defaultValue={user && user.user_detail.first_name}
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
                            // defaultValue={user && user.user_detail.last_name}
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
                            // defaultValue={user && user.user_phones[0].phone_number}
                               className="input-style"
                               {...register('phone_numbers.phone_number', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'phone_numbers'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>
                </div>

                <div className="form__body">
                    <div className="form__country">
                        <label htmlFor={country_name} className="input-text">Страна</label>
                        <Controller
                            control={control}
                            name={'addresses.country.country_name'}
                            rules={
                                { required: 'Поле обязательно к заполнению' }
                            }
                            render={({ field, fieldState: { error } }) =>
                                <Select
                                    id={country_name}
                                    data={countries}
                                    multi={false}
                                    field={field}
                                    errors={error}
                                />
                            }
                        />

                        <ErrorMessage name={'category'}
                                      errors={errors}
                                      render={({ message }) => <InputError message={message} />}
                        />
                    </div>
                    <div className="form__city">
                        <label htmlFor={city} className="input-text">Город</label>
                        <input type="text"
                               id={city}
                            // defaultValue={user && user.user_address.city}
                               className="input-style"
                               {...register('addresses.city', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.city'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__street">
                        <label htmlFor={street_address} className="input-text">Улица</label>
                        <input type="text"
                               id={street_address}
                            // defaultValue={user && user.user_address.street_address}
                               className="input-style"
                               {...register('addresses.street_address', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.street_address'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__code">
                        <label htmlFor={postal_code} className="input-text">Почтовый индекс</label>
                        <input type="number"
                               id={postal_code}
                            // defaultValue={user && user.user_address.postal_code}
                               className="input-style"
                               {...register('addresses.postal_code', {
                                   required: 'Поле обязательно к заполнению',
                                   minLength: {value: 5, message: 'Минимум 5 символов'},
                                   maxLength: {value: 20, message: 'Максимум 20 символов'}
                               })}
                        />
                        <ErrorMessage name={'addresses.postal_code'}
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
                                // defaultValue={user && user.user_detail.user_image}
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