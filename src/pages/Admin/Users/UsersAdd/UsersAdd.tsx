import { Button, Input, Label, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { AddUser } from '@/models/userTypes'
import userApi from '@/store/api/user'
import { ErrorMessage } from '@hookform/error-message'
import { SubmitHandler, useForm } from 'react-hook-form'
import './UsersAdd.scss'

const UsersAdd = () => {
    const { closeAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.userReducer)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddUser>({ mode: 'onBlur' })
    const [addUser] = userApi.useAddUserMutation()
    const [addAdmin] = userApi.useAddAdminMutation()

    const onSubmit: SubmitHandler<AddUser> = async (data) => {
        try {
            await data.user.is_admin
                ? addAdmin(data)
                : addUser(data)
                    .unwrap()
            alert('Success')
        }

        catch (e: any) {
            console.log(e)
        }
    }

    return (
        <Modal handleClose={closeAddModal} isOpen={isOpenAddModal}>
            <div className='users-add'>
                <div className="users-add__title">Добавить пользователь</div>
                <form className="users-add__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="users-add__info">
                        <div className="users-add__username">
                            <Label htmlFor='username'>Логин</Label>
                            <Input type='text' id='username'
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
                            <Label htmlFor='password'>Пароль</Label>
                            <Input type='text' id='password'
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
                            <Label htmlFor='firstname'>Имя</Label>
                            <Input type='text' id='firstname'
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
                            <Label htmlFor='lastname'>Фамилия</Label>
                            <Input type='text' id='lastname'
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
                            <Label htmlFor='phone'>Номер телефона</Label>
                            <Input type='text' id='phone'
                                {...register('user_phones.0.phone_number', {
                                    required: 'Поле обязательно к заполнению'
                                })} />

                            <ErrorMessage name='user_phones.0.phone_number' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="users-add__image">
                            <Label htmlFor='image'>Ссылька на аватарку</Label>
                            <Input type='text' id='image'
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
                            <Label htmlFor='street'>Страна</Label>
                            <Input type='text' id='street'
                                {...register('user_address.0.postal_code', {
                                    required: 'Поле обязательно к заполнению'
                                })} />
                        </div>
                        <div className="users-add__city">
                            <Label htmlFor='city'>Город</Label>
                            <Input type='text' id='city'
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
                            <Label htmlFor='street'>Почтовый индекс</Label>
                            <Input type='text' id='street'
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
                            <Label htmlFor='street'>Улица</Label>
                            <Input type='text' id='street'
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
                        <Label htmlFor='admin'>
                            <span>Сделать Администраторам</span>
                            <span className='icon-check check-icon'></span>
                        </Label>
                        <Input type='checkbox' id='admin'
                            {...register('user.is_admin')} />
                    </div>

                    <Button hoverEffect handleAction={() => 1 + 1}>Добавить</Button>
                </form>
            </div>
        </Modal>
    )
}

export default UsersAdd