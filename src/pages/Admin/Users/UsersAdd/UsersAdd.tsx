import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchCountry } from '@/models/countryType'
import { AddUser } from '@/models/userTypes'
import { countryAPi, userApi } from '@/store/api'
import { ErrorMessage } from '@hookform/error-message'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from "react-select/async"
import { ToastContainer, toast } from 'react-toastify'
import './UsersAdd.scss'

const UsersAdd = () => {
    const { closeAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.userReducer)
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<AddUser>({ mode: 'onBlur' })

    const { data: countries } = countryAPi.useGetAllCountriesQuery()
    const [addUser, addUserResult] = userApi.useAddUserMutation()
    const [addAdmin, addAdminResult] = userApi.useAddAdminMutation()

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = countries?.filter((option: FetchCountry) =>
            option.country_name.toLowerCase().includes(searchValue.toLowerCase())
        )


        callback(filteredOptions)
    }

    const values = (field: any) => {
        const currentCountry = countries?.find((value: FetchCountry) => value.id === field.value)
        return currentCountry?.id
    }

    const onSubmit: SubmitHandler<AddUser> = async (data) => {
        console.log(data)

        try {
            data.user.is_admin
                ? await addAdmin(data).unwrap()
                : await addUser(data).unwrap()
            toast.success('Пользователь успешно добавлен')
            reset()
            closeAddModal()
        }

        catch (e: any) {
            toast.error(`Ошибка, статсус : ${e.status}`)
        }
    }

    const isLoading = addAdminResult.isLoading || addUserResult.isLoading

    return (
        <Modal handleClose={closeAddModal} isOpen={isOpenAddModal} isLoading={isLoading}>
            <div className='users-add'>
                <div className='user-add__body'>
                    <div className="users-add__title">Добавить пользователь</div>
                    <form className="users-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="users-add__info">
                            <div className="users-add__username">
                                <label htmlFor='username' className='input__label'>Логин</label>
                                <input type='text' id='username' className='input__style'
                                    {...register('user.username', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user.username' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                            <div className="users-add__password">
                                <label htmlFor='password' className='input__label'>Пароль</label>
                                <input type='text' id='password' className='input__style'
                                    {...register('user.password', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user.password' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                        </div>

                        <div className="users-add__details">
                            <div className="users-add__firstname">
                                <label htmlFor='firstname' className='input__label'>Имя</label>
                                <input type='text' id='firstname' className='input__style'
                                    {...register('user_detail.first_name', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user_detail.first_name' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__lastname">
                                <label htmlFor='lastname' className='input__label'>Фамилия</label>
                                <input type='text' id='lastname' className='input__style'
                                    {...register('user_detail.last_name', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user_detail.last_name' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__phone">
                                <label htmlFor='phone' className='input__label'>Номер телефона</label>
                                <input type='text' id='phone' className='input__style'
                                    {...register('user_phones.0.phone_number', {
                                        required: 'Поле обязательно к заполнению'
                                    })} />

                                <ErrorMessage name='user_phones.0.phone_number' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__image">
                                <label htmlFor='image' className='input__label'>Ссылька на аватарку</label>
                                <input type='text' id='image' className='input__style'
                                    {...register('user_detail.user_image', {
                                        required: 'Поле обязательно к заполнению'
                                    })} />

                                <ErrorMessage name='user_detail.user_image' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                        </div>

                        <div className="users-add__address">
                            <div className="users-add__country">
                                <label htmlFor='street' id='country' className='input__label'>Страна</label>
                                <Controller
                                    control={control}
                                    {...register('user_address.0.country_id', {required: 'Поле обязательно к заполнению'})}
                                    render={({ field }) => {
                                        return (
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
                                        )
                                    }}
                                />

                                <ErrorMessage name='user_address.0.country_id' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__city">
                                <label htmlFor='city' className='input__label'>Город</label>
                                <input type='text' id='city' className='input__style'
                                    {...register('user_address.0.city', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user_address.0.city' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__postolcode">
                                <label htmlFor='street' className='input__label'>Почтовый индекс</label>
                                <input type='text' id='street' className='input__style'
                                    {...register('user_address.0.postal_code', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 3, message: 'Минимум 3 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user_address.0.postal_code' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__street">
                                <label htmlFor='street' className='input__label'>Улица</label>
                                <input type='text' id='street' className='input__style'
                                    {...register('user_address.0.street_address', {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: { value: 5, message: 'Минимум 5 символов' },
                                        maxLength: { value: 20, message: 'Максимум 20 символов' }
                                    })} />

                                <ErrorMessage name='user_address.0.street_address' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                        </div>

                        <div className="users-add__admin">
                            <input type='checkbox' id='admin'
                                {...register('user.is_admin')} />
                            <label htmlFor='admin' className='input__label'>
                                <span className='icon-check'></span>
                                <span>Сделать Администраторам</span>
                            </label>
                        </div>

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </Modal>
    )
}

export default UsersAdd