import { ErrorMessage } from '@hookform/error-message'
import { useCallback } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
import makeAnimated from "react-select/animated"
import AsyncSelect from "react-select/async"
import { InputError } from '../../components/UI'
import { useGetAllCountriesQuery } from '../../store/api/country/countryApi'
import { useAddUserMutation } from '../../store/api/user/userApi'
import { RegisterUserType } from '../../store/api/user/userTypes'
import "./Register.scss"

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control
    } = useForm<RegisterUserType>({ mode: 'onBlur' })

    const { data: countries } = useGetAllCountriesQuery()
    const [addUser] = useAddUserMutation()

    const animatedComponents = makeAnimated()
    const loadOptions = useCallback(
        (searchValue: string, callback: any) => {
            const filteredOptions = countries?.filter((option: any) =>
                option.country_name.toLowerCase().includes(searchValue.toLowerCase())
            )

            callback(filteredOptions)
        }, [countries])


    const onSubmit: SubmitHandler<RegisterUserType> = (data) => {
        console.log(data)
        addUser(data)
    }

    return (
        <div className="content__body">
            <div className="site-path">
                <Link className="site-history" to="/">Главная</Link>
                <span className="current-site" >Регистрация</span>
            </div>
            <h1 className="title">Регистрация</h1>
            <form action="#" className="content__register form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__login">
                    <label htmlFor="username" className="input-text">
                        Логин
                    </label>
                    <input type="text"
                        id="username"
                        className="input-style"
                        {...register('user.username', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />

                    <ErrorMessage name={'user.username'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__password">
                    <label htmlFor="password" className="input-text">
                        Пароль
                    </label>
                    <input type="password"
                        id="password"
                        className="input-style"
                        {...register('user.password', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }

                        })}
                    />

                    <ErrorMessage name={'user.password'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                {/* <div className="form__password">
                    <label htmlFor="repeat-password" className="input-text">
                        Введите пароль повторно
                        <span className="required-form">*</span>
                    </label>
                    <input type="password" id="repeat-password" className="input-style" />
                </div> */}

                <div className="form__text">
                    <label htmlFor="first_name" className="input-text">Имя</label>
                    <input type="text"
                        id="first_name"
                        className="input-style"
                        {...register('user_detail.first_name', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />

                    <ErrorMessage name={'user_detail.first_name'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__text">
                    <label htmlFor="last_name" className="input-text">Фамилия</label>
                    <input type="text"
                        id="last_name"
                        className="input-style"
                        {...register('user_detail.last_name', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />

                    <ErrorMessage name={'user_detail.last_name'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__phone">
                    <label htmlFor='number' className="input-text">Телефон</label>

                    <input type="number"
                        id='number'
                        className="input-style"
                        {...register('user_phones.0.phone_number', {
                            valueAsNumber: true,
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />
                    <ErrorMessage name={'user_phones.0.phone_number'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__country">
                    <Controller
                        control={control}
                        name='user_address.country'
                        rules={
                            { required: 'Поле обязательно к заполнению' }
                        }
                        render={({ field }) =>
                            <>
                                <label htmlFor='county_name' className="input-text">Выберите
                                    страну</label>
                                <AsyncSelect
                                    id='country_name'
                                    name='user_address.country'
                                    classNamePrefix="custom-select"
                                    placeholder={false}
                                    components={animatedComponents}
                                    onBlur={field.onBlur}
                                    cacheOptions
                                    loadOptions={loadOptions}
                                    getOptionValue={value => value.country_name}
                                    getOptionLabel={value => value.country_name}
                                    value={countries?.find((c: any) => c.country_name === field.value)}
                                    onChange={newValue => field.onChange?.(newValue)}
                                />
                            </>
                        }
                    />

                    <ErrorMessage name={'addresses.0.country.country_name'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__city">
                    <label htmlFor='city' className="input-text">Город</label>
                    <input type="text"
                        id='city'
                        className="input-style"
                        {...register('user_address.city', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />
                    <ErrorMessage name={'user_adress.city'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__code">
                    <label htmlFor='code' className="input-text">Почтовый индекс</label>
                    <input type="number"
                        id='code'
                        className="input-style"
                        {...register('user_address.postal_code', {
                            required: 'Поле обязательно к заполнению',
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' }
                        })}
                    />
                    <ErrorMessage name={'user_address.posta_code'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <div className="form__image">
                    <label htmlFor='image' className="input-text">Картинка</label>
                    <input
                        type="text"
                        id='image'
                        className="input-style"
                        {...register(
                            'user_detail.user_image',
                            {
                                required: 'Поле обязательно к заполнению',
                                minLength: { value: 1, message: 'Добавитье ссылку' },
                            }
                        )}
                    />
                    <ErrorMessage name={'user_detail.user_image'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>

                <button type="submit" className="form__submit btn r-btn w-opacity">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Register