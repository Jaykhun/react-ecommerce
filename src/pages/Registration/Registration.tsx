import { Button, Loader, Message, PhoneMask } from '@/components/UI'
import { FetchCountry } from '@/models/countryTypes'
import { AddUser } from '@/models/userTypes'
import countryApi from '@/store/api/country'
import userApi from '@/store/api/user'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from "react-select"
import makeAnimated from 'react-select/animated'
import AsyncSelect from "react-select/async"
import './Registration.scss'

const Registration = () => {
    const navigate = useNavigate()
    const { register, control, formState: { errors }, reset, handleSubmit } = useForm<AddUser>({ mode: 'onBlur' })
    const [addUser, { isLoading, isSuccess }] = userApi.useAddUserMutation()
    const { data: countries, isLoading: countriesIsLoading, isError, error } = countryApi.useGetAllCountriesQuery()

    const VALIDATION_RULES = {
        required: 'Поле обязательно к заполнению',
        minLength: { value: 5, message: 'Минимум 5 символов' },
        maxLength: { value: 20, message: 'Максимум 20 символов' }
    }

    const phoneTypeOptions = [
        { value: 'mobile', label: 'Мобильный' },
        { value: 'work', label: 'Рабочего места' },
        { value: 'home', label: 'Домашний' }
    ]

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = countries?.filter((option: FetchCountry) =>
            option.country_name.toLowerCase().includes(searchValue.toLowerCase())
        )


        callback(filteredOptions)
    }

    const onSubmit: SubmitHandler<AddUser> = async (data) => {
        try {
            await addUser(data).unwrap()
            Notify.info(`${data.user.username} теперь войдите`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            navigate('/login')
        }

        catch (e: any) {
            Notify.failure(`Ошибка, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }


    if (isLoading) return <Loader isLoading={isLoading} />

    return (
        <div className='registration'>
            <div className="registration__body">
                <div className="registration__title">Регистрация</div>

                <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="registration__info">
                        <div className="registration__username">
                            <label htmlFor='username' className='input__label'>Логин</label>
                            <input type='text' id='username' className='input__style'
                                {...register('user.username', VALIDATION_RULES)} />

                            <ErrorMessage name='user.username' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                        <div className="registration__password">
                            <label htmlFor='password' className='input__label'>Пароль</label>
                            <input type='text' id='password' className='input__style'
                                {...register('user.password', VALIDATION_RULES)} />

                            <ErrorMessage name='user.password' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                    </div>

                    <div className="registration__details">
                        <div className="registration__firstname">
                            <label htmlFor='firstname' className='input__label'>Имя</label>
                            <input type='text' id='firstname' className='input__style'
                                {...register('user_detail.first_name', VALIDATION_RULES)} />

                            <ErrorMessage name='user_detail.first_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="registration__lastname">
                            <label htmlFor='lastname' className='input__label'>Фамилия</label>
                            <input type='text' id='lastname' className='input__style'
                                {...register('user_detail.last_name', VALIDATION_RULES)} />

                            <ErrorMessage name='user_detail.last_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                    </div>

                    <div className="registration__numbers">
                        <div className="registration__phone">
                            <label htmlFor='phone' className='input__label'>Номер телефона</label>
                            <PhoneMask
                                control={control}
                                props={{ ...register('user_phones.0.phone_number', VALIDATION_RULES) }}
                            />

                            <ErrorMessage name='user_phones.0.phone_number' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="registration__phoneType">
                            <label htmlFor='phoneType' className='input__label'>Тип телефона</label>

                            <Controller
                                control={control}
                                {...register('user_phones.0.type', {
                                    required: 'Поле обязательно к заполнению'
                                })}
                                render={({ field }) => ((
                                    <Select
                                        id='phoneType'
                                        classNamePrefix={'select-styles'}
                                        options={phoneTypeOptions}
                                        placeholder={false}
                                        onBlur={field.onBlur}
                                        onChange={newValue => field.onChange(newValue?.value)}
                                    />
                                ))}
                            />

                            <ErrorMessage name='user_phones.0.type' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                    </div>

                    <div className="registration__image">
                        <label htmlFor='image' className='input__label'>Ссылька на аватарку</label>
                        <input type='text' id='image' className='input__style'
                            {...register('user_detail.user_image', {
                                required: 'Поле обязательно к заполнению'
                            })} />

                        <ErrorMessage name='user_detail.user_image' errors={errors}
                            render={(data) => <Message formError={data.message} />}
                        />
                    </div>



                    <div className="registration__address">
                        <div className="registration__country">
                            <label htmlFor='street' id='country' className='input__label'>Страна</label>
                            {countriesIsLoading
                                ? <Message formError='Идет загрузка стран...' />
                                : isError
                                    ? <Message error={error} formError='Не удалось загузить страны' />
                                    : <Controller
                                        control={control}
                                        {...register('user_address.country_id',
                                            { required: 'Поле обязательно к заполнению' }
                                        )}
                                        render={({ field }) => ((
                                            <AsyncSelect
                                                id='country'
                                                classNamePrefix='select-styles'
                                                components={makeAnimated()}
                                                placeholder={false}
                                                defaultOptions
                                                loadOptions={loadOptions}
                                                onBlur={field.onBlur}
                                                getOptionValue={value => value.country_name}
                                                getOptionLabel={value => value.country_name}
                                                onChange={(newValue: any) => field.onChange(newValue.id)}
                                                value={countries?.find((value: FetchCountry) => value.id === field.value)}
                                            />
                                        ))}
                                    />
                            }

                            <ErrorMessage name='user_address.country_id' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="registration__city">
                            <label htmlFor='city' className='input__label'>Город</label>
                            <input type='text' id='city' className='input__style'
                                {...register('user_address.city', VALIDATION_RULES)} />

                            <ErrorMessage name='user_address.city' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="registration__postolcode">
                            <label htmlFor='postolcode' className='input__label'>Почтовый индекс</label>
                            <input type='text' id='postolcode' className='input__style'
                                {...register('user_address.postal_code', VALIDATION_RULES)} />

                            <ErrorMessage name='user_address.postal_code' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="registration__street">
                            <label htmlFor='street' className='input__label'>Улица</label>
                            <input type='text' id='street' className='input__style'
                                {...register('user_address.street_address', VALIDATION_RULES)} />

                            <ErrorMessage name='user_address.street_address' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                    </div>

                    <Button hoverEffect>Подтвердить</Button>
                </form>
            </div>
        </div>
    )
}

export default Registration