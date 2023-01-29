import React, {FC, useId} from 'react';
import "./UsersForm.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {InputError, UploadFile} from "../../../../components/UI";
import {UsersFormPropsType, FormValues} from "./types";
import {useAddUserMutation, useUpdateUserMutation} from "../../../../store/user/userApi";
import {IUser, NewUserRoot} from "../../../../store/user/userTypes";

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

    console.log(user)

    const initialValue: NewUserRoot | IUser = {
        user: {
            username: '',
            is_admin: false,
            password: ''
        },
        user_detail: {
            first_name: '',
            last_name: '',
            user_image: ''
        },
        user_phones: [{
            phone_number: '+998',
            type: 'mobile'
        }],
        user_address: {
            street_address: '',
            postal_code: '',
            city: '',
            country_id: 1
        }
    }

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<NewUserRoot | IUser>({mode: 'onBlur', defaultValues: initialValue})

    const [updateUser] = useUpdateUserMutation()
    const [addUser] = useAddUserMutation()

    const onSubmit: SubmitHandler<NewUserRoot> = (data) => {
        console.log(data)

        user
            ? updateUser(data)
            : addUser(data)

        // reset();
    }


    return (
        <></>
        // <form className="all-users__form" onSubmit={handleSubmit(onSubmit)}>
        //     <div className="form__inner">
        //         <div className="form__info">
        //             <div className="form__name">
        //                 <label htmlFor={user_name} className="input-text">Логин</label>
        //                 <input type="text"
        //                        id={user_name}
        //                        // defaultValue={user && user.user.username}
        //                        className="input-style"
        //                        {...register('user.username', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors?.user?.username && <InputError message={errors.user.username.message}/>}
        //             </div>
        //
        //             <div className="form__password">
        //                 <label htmlFor={password} className="input-text">Пароль</label>
        //                 <input type="password"
        //                        id={password}
        //                        // defaultValue={user && user.user.password}
        //                        className="input-style"
        //                        {...register('user.password', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors.user?.password && <InputError message={errors.user.password.message}/>}
        //             </div>
        //
        //             <div className="form__firstName">
        //                 <label htmlFor={first_name} className="input-text">Имя</label>
        //                 <input type="text"
        //                        id={first_name}
        //                        // defaultValue={user && user.user_detail.first_name}
        //                        className="input-style"
        //                        {...register('user_detail.first_name', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors.user_detail?.first_name &&
        //                     <InputError message={errors.user_detail?.first_name.message}/>}
        //             </div>
        //
        //             <div className="form__lastName">
        //                 <label htmlFor={last_name} className="input-text">Фамилия</label>
        //                 <input type="text"
        //                        id={last_name}
        //                        // defaultValue={user && user.user_detail.last_name}
        //                        className="input-style"
        //                        {...register('user_detail.last_name', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors.user_detail?.last_name && <InputError message={errors.user_detail.last_name.message}/>}
        //             </div>
        //
        //             <div className="form__number">
        //                 <label htmlFor={number} className="input-text">Телефон</label>
        //                 <input type="number"
        //                        id={number}
        //                        // defaultValue={user && user.user_phones[0].phone_number}
        //                        className="input-style"
        //                        {...register('user_phones', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors?.user_phones && <InputError message={errors.user_phones.message}/>}
        //             </div>
        //         </div>
        //
        //         <div className="form__body">
        //             <div className="form__city">
        //                 <label htmlFor={city} className="input-text">Город</label>
        //                 <input type="text"
        //                        id={city}
        //                        // defaultValue={user && user.user_address.city}
        //                        className="input-style"
        //                        {...register('user_address.city', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors?.user_address?.city && <InputError message={errors.user_address?.city.message}/>}
        //             </div>
        //
        //             <div className="form__street">
        //                 <label htmlFor={street_address} className="input-text">Улица</label>
        //                 <input type="text"
        //                        id={street_address}
        //                        // defaultValue={user && user.user_address.street_address}
        //                        className="input-style"
        //                        {...register('user_address.street_address', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors.user_address?.street_address &&
        //                     <InputError message={errors.user_address.street_address.message}/>}
        //             </div>
        //
        //             <div className="form__code">
        //                 <label htmlFor={postal_code} className="input-text">Почтовый индекс</label>
        //                 <input type="number"
        //                        id={postal_code}
        //                        // defaultValue={user && user.user_address.postal_code}
        //                        className="input-style"
        //                        {...register('user_address.postal_code', {
        //                            required: 'Поле обязательно к заполнению',
        //                            minLength: {value: 5, message: 'Минимум 5 символов'},
        //                            maxLength: {value: 20, message: 'Максимум 20 символов'}
        //                        })}
        //                 />
        //                 {errors.user_address?.postal_code &&
        //                     <InputError message={errors.user_address.postal_code.message}/>}
        //             </div>
        //
        //             <div className="form__image">
        //                 <div className="file">
        //                     <label htmlFor={user_image} className="input-text">Картика</label>
        //                     <input
        //                         type="text"
        //                         id={user_image}
        //                         className="input-style"
        //                         // defaultValue={user && user.user_detail.user_image}
        //                         {...register(
        //                             'user_detail.user_image',
        //                             {
        //                                 required: 'Поле обязательно к заполнению',
        //                                 minLength: {value: 1, message: 'Добавитье ссылку'},
        //                             }
        //                         )}
        //                     />
        //                     {errors?.user_detail?.user_image &&
        //                         <InputError message={errors.user_detail.user_image.message}/>}
        //                 </div>
        //
        //                 {/*<UploadFile*/}
        //                 {/*    id={user_image}*/}
        //                 {/*    name={user_image}*/}
        //                 {/*    error={errors}*/}
        //                 {/*    isMulti={false}*/}
        //                 {/*    props={*/}
        //                 {/*        {*/}
        //                 {/*            ...register('user_image', {*/}
        //                 {/*                required: 'Поле обязательно к заполнению',*/}
        //                 {/*            })*/}
        //                 {/*        }*/}
        //                 {/*    }*/}
        //                 {/*/>*/}
        //             </div>
        //         </div>
        //     </div>
        //     {user ? <button disabled={!isDirty}
        //                     className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
        //             {buttonValue}</button>
        //         : <button className={`btn r-btn w-opacity form__submit`}>{buttonValue}</button>
        //     }
        // </form>
    );
};

export default UsersForm;