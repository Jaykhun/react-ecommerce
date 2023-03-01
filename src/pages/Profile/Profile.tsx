import React from 'react';
import "./Profile.scss"
import {getJwtToken} from "../../helpers/getJwtToken";
import {useGetAllUsersQuery, useGetSingleUserQuery} from "../../store/api/user/userApi";
import {useActions} from "../../hooks/useActions";
import {ProfileLoader} from "./index";

const Profile = () => {
    const isUserExists = getJwtToken('token')
    const {data: users} = useGetAllUsersQuery()
    const currentUser = users?.find(user => user.username === isUserExists?.sub)
    const {data, isLoading} = useGetSingleUserQuery(currentUser?.id)
    const {onUserEditPopupClick} = useActions()

    return (
        <>
            <div className="profile">
                <div className="profile__title title">Персональные данные</div>
                {isLoading ? <ProfileLoader/> : <>
                    <div className="profile__info">
                        <div className="profile__name">Логин: {data?.username}</div>
                        <div className="profile__fio">
                            Имя пользовтеля: {data?.user_detail.first_name} {data?.user_detail.last_name}</div>
                        <div className="profile__address address">
                            <p className="address__title">Адресс</p>
                            <div className="address__info">
                                <div className="address__city">Город: {data?.addresses[0].city}</div>
                                <div className="address__street">Улица: {data?.addresses[0].street_address}</div>
                                <div
                                    className="address__country">Страна: {data?.addresses[0].country.country_name}</div>
                            </div>
                        </div>

                        <div className="profile__phone">Телефон: <a
                            href={`tel:${currentUser?.phone_numbers[0].phone_number}`}>{currentUser?.phone_numbers[0].phone_number}</a>
                        </div>
                    </div>

                    <button className="profile__btn btn r-btn w-opacity" onClick={() => onUserEditPopupClick()}>Изменить
                        данные
                    </button>
                </>}
            </div>
        </>
    );
};

export default Profile;