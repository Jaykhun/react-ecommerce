import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { EditUser } from '@/models/userTypes'
import userApi from '@/store/api/user'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import './UsersEdit.scss'

const UsersEdit = () => {
    const { closeUserEditModal } = useActions()
    const { isOpenEditModal, userId } = useTypedSelector(state => state.userSlice)
    const { register, formState: { errors, isDirty }, handleSubmit, reset } = useForm<EditUser>({ mode: 'onBlur' })
    
    const { data: user, isFetching, isError: userIsError, error: userError } = userApi.useGetSingleUserQuery(userId, { skip: !userId })
    const [editUser, result] = userApi.useEditUserMutation()

    const modalState = {
        isLoading: isFetching || result.isLoading,
        isError: userIsError || result.isError,
        error: userError || result.error
    }

    useEffect(() => {
        reset()
    }, [user])

    const VALIDATION_RULES = {
        required: 'Поле обязательно к заполнению',
        minLength: { value: 5, message: 'Минимум 5 символов' },
        maxLength: { value: 20, message: 'Максимум 20 символов' }
    }

    const onSubmit: SubmitHandler<EditUser> = async (data) => {
        try {
            await editUser({ data: data, id: userId }).unwrap()
            Notify.success(`${user?.username} успешно изменен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeUserEditModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при изменение ${user?.username}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeUserEditModal}  >
            <div className='users-edit'>
                <div className='users-edit__body'>
                    <div className="users-edit__title">Изменить данные</div>
                    
                    <form className="users-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="users-edit__username">
                            <label htmlFor='username' className='input__label'>Логин</label>
                            <input type='text' id='username' className='input__style'
                                defaultValue={user?.username}
                                {...register('user.username', VALIDATION_RULES)} />

                            <ErrorMessage name='user.username' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="users-edit__firstname">
                            <label htmlFor='firstname' className='input__label'>Имя</label>
                            <input type='text' id='firstname' className='input__style'
                                defaultValue={user?.user_detail.first_name}
                                {...register('user_detail.first_name', VALIDATION_RULES)} />

                            <ErrorMessage name='user_detail.first_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="users-edit__lastname">
                            <label htmlFor='lastnname' className='input__label'>Фамилия</label>
                            <input type='text' id='lastnname' className='input__style'
                                defaultValue={user?.user_detail.last_name}
                                {...register('user_detail.last_name', VALIDATION_RULES)} />

                            <ErrorMessage name='user_detail.last_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="users-edit__image">
                            <label htmlFor='text' className='input__label'>Аватарка</label>
                            <input type='text' id='image' className='input__style'
                                defaultValue={user?.user_detail.user_image}
                                {...register('user_detail.user_image', VALIDATION_RULES)} />

                            <ErrorMessage name='user_detail.user_image' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button disabled={!isDirty} hoverEffect>Изменить</Button>
                    </form>
                </div>
            </div>
        </Modal >
    )
}

export default UsersEdit