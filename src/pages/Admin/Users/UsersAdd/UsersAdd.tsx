import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchCountry } from '@/models/countryTypes'
import { AddUser } from '@/models/userTypes'
import countryApi from '@/store/api/country'
import userApi from '@/store/api/user'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import Select from "react-select"
import makeAnimated from 'react-select/animated'
import AsyncSelect from "react-select/async"
import './UsersAdd.scss'

const UsersAdd = () => {
    const { closeUserAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.userSlice)
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<AddUser>({ mode: 'onBlur' })

    const { data: countries, isLoading: countriesIsLoading, isError, error } = countryApi.useGetAllCountriesQuery()
    const [addUser, addUserResult] = userApi.useAddUserMutation()
    const [addAdmin, addAdminResult] = userApi.useAddAdminMutation()

    const modalState = {
        isLoading: addAdminResult.isLoading || addUserResult.isLoading
    }

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
            data.user.is_admin
                ? await addAdmin(data).unwrap()
                : await addUser(data).unwrap()
            Notify.success(`${data.user.username} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            closeUserAddModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добаление ${data.user.username}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeUserAddModal}  >
            <div className='users-add'>
                <div className='user-add__body'>
                    <div className="users-add__title">Добавить пользователь</div>

                    <form className="users-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="users-add__info">
                            <div className="users-add__username">
                                <label htmlFor='username' className='input__label'>Логин</label>
                                <input type='text' id='username' className='input__style'
                                    {...register('user.username', VALIDATION_RULES)} />

                                <ErrorMessage name='user.username' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                            <div className="users-add__password">
                                <label htmlFor='password' className='input__label'>Пароль</label>
                                <input type='text' id='password' className='input__style'
                                    {...register('user.password', VALIDATION_RULES)} />

                                <ErrorMessage name='user.password' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>
                        </div>

                        <div className="users-add__details">
                            <div className="users-add__firstname">
                                <label htmlFor='firstname' className='input__label'>Имя</label>
                                <input type='text' id='firstname' className='input__style'
                                    {...register('user_detail.first_name', VALIDATION_RULES)} />

                                <ErrorMessage name='user_detail.first_name' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__lastname">
                                <label htmlFor='lastname' className='input__label'>Фамилия</label>
                                <input type='text' id='lastname' className='input__style'
                                    {...register('user_detail.last_name', VALIDATION_RULES)} />

                                <ErrorMessage name='user_detail.last_name' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__phone">
                                <label htmlFor='phone' className='input__label'>Номер телефона</label>
                                <Controller
                                    control={control}
                                    {...register('user_phones.0.phone_number', VALIDATION_RULES)}
                                    render={({ field }) => ((
                                        <PatternFormat prefix='+' format="+(###) ## ### ## ##"
                                            type='text' id='phone' className='input__style'
                                            onBlur={field.onBlur}
                                            onChange={newValue => field.onChange(newValue.target.value)}
                                        />
                                    ))}
                                />

                                <ErrorMessage name='user_phones.0.phone_number' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__phoneType">
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

                            <div className="users-add__city">
                                <label htmlFor='city' className='input__label'>Город</label>
                                <input type='text' id='city' className='input__style'
                                    {...register('user_address.city', VALIDATION_RULES)} />

                                <ErrorMessage name='user_address.city' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__postolcode">
                                <label htmlFor='postolcode' className='input__label'>Почтовый индекс</label>
                                <input type='text' id='postolcode' className='input__style'
                                    {...register('user_address.postal_code', VALIDATION_RULES)} />

                                <ErrorMessage name='user_address.postal_code' errors={errors}
                                    render={(data) => <Message formError={data.message} />}
                                />
                            </div>

                            <div className="users-add__street">
                                <label htmlFor='street' className='input__label'>Улица</label>
                                <input type='text' id='street' className='input__style'
                                    {...register('user_address.street_address', VALIDATION_RULES)} />

                                <ErrorMessage name='user_address.street_address' errors={errors}
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
        </Modal>
    )
}

export default UsersAdd