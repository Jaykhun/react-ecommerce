import {SubmitHandler, useForm} from "react-hook-form";
import {UserEdit} from "../../../store/api/user/userTypes";
import {ErrorMessage} from "@hookform/error-message";
import {ActionLoader, InputError} from "../../../components/UI";
import "./ProfileForm.scss";
import {
    useGetAllUsersQuery,
    useUpdateProfileUserMutation
} from "../../../store/api/user/userApi";
import {getJwtToken} from "../../../helpers/getJwtToken";
import {useGetSingleUserQuery} from "../../../store/api/user/userApi";
import {useActions} from "../../../hooks/useActions";

const ProfileForm = () => {
    const isUserExists = getJwtToken('token')
    const {data: users} = useGetAllUsersQuery()
    const currentUser = users?.find(user => user.username === isUserExists?.sub)
    const {data, isLoading, isSuccess} = useGetSingleUserQuery(currentUser?.id)
    const [updateUser] = useUpdateProfileUserMutation()
    const {onUserEditPopupClick} = useActions()

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit
    } = useForm<UserEdit>({
        mode: 'onBlur', defaultValues: {
            user: {
                username: data?.username,
                is_admin: data?.is_admin
            },
            user_detail: {
                first_name: data?.user_detail.first_name,
                last_name: data?.user_detail.last_name,
                user_image: data?.user_detail.user_image
            }
        }
    })

    const onSubmit: SubmitHandler<UserEdit> = (data) => {
        updateUser({id: currentUser?.id, rest: data})
        onUserEditPopupClick()
    }

    return (
        <>
            {isLoading && <ActionLoader/>}
            {isSuccess && <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username" className="input-text">Логин</label>
                <input type="text"
                       id="username"
                       className="input-style"
                       {...register('user.username', {
                           required: 'Поле обязательно к заполнению',
                           minLength: {value: 5, message: 'Минимум 5 символов'},
                           maxLength: {value: 20, message: 'Максимум 20 символов'}
                       })}
                />
                <ErrorMessage name={'user.username'}
                              errors={errors}
                              render={({message}) => <InputError message={message}/>}
                />

                <label htmlFor="first_name" className="input-text">Имя</label>
                <input type="text"
                       id="first_name"
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

                <label htmlFor="last_name" className="input-text">Фамилия</label>
                <input type="text"
                       id="last_name"
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

                {<button disabled={!isDirty}
                         className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>Изменить
                </button>
                }
            </form>}
        </>
    );
};

export default ProfileForm;