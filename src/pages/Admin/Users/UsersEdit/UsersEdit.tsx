import { SubmitHandler, useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Modal, Input, Label, Button, Message } from '@/components/UI'
import { EditUser } from '@/models/userTypes'
import userApi from '@/store/api/user'
import './UsersEdit.scss'

const UsersEdit = () => {
    const { closeEditModal } = useActions()
    const { isOpenEditModal, userId } = useTypedSelector(state => state.userReducer)
    const { data: user, isLoading, isError, error } = userApi.useGetSingleUserQuery(userId, { skip: !userId })
    const { register, formState: { errors, isDirty }, handleSubmit, reset } = useForm<EditUser>({ mode: 'onBlur' })
    const [editUser] = userApi.useEditUserMutation()

    const onSubmit: SubmitHandler<EditUser> = async (data) => {
        console.log(data);
        
        try {
            await editUser({ data: data, id: userId }).unwrap()
            alert('Success')
        }

        catch (e: any) {
            alert(e.data)
        }
    }

    return (
        <Modal handleClose={closeEditModal} isOpen={isOpenEditModal}>
            {isLoading ? <p>Loading</p> : <div className='users-edit'>
                <div className="users-edit__title">Изменить данные</div>
                <form className="users-edit__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="users-edit__username">
                        <Label htmlFor='username'>Логин</Label>
                        <Input type='text' id='username'
                            defaultValue={user?.username}
                            {...register('user.username', {
                                required: 'Поле обязательно к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                            })} />

                        <ErrorMessage name='user.username' errors={errors}
                            render={(data) => <Message formError={data.message} />}
                        />
                    </div>

                    <div className="users-edit__firstname">
                        <Label>Имя</Label>
                        <Input type='text' id='firstname'
                            defaultValue={user?.user_detail.first_name}
                            {...register('user_detail.first_name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                            })} />
                    </div>

                    <div className="users-edit__lastname">
                        <Label>Фамилия</Label>
                        <Input type='text' id='lastnname'
                            defaultValue={user?.user_detail.last_name}
                            {...register('user_detail.last_name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                            })} />
                    </div>

                    <div className="users-edit__image">
                        <Label>Аватарка</Label>
                        <Input type='text' id='image'
                            defaultValue={user?.user_detail.user_image}
                            {...register('user_detail.user_image', {
                                required: 'Поле обязательно к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' },
                                maxLength: { value: 20, message: 'Максимум 20 символов' }
                            })} />
                    </div>

                    <Button disabled={!isDirty} hoverEffect>Изменить</Button>
                </form>
            </div>}
        </Modal>
    )
}

export default UsersEdit