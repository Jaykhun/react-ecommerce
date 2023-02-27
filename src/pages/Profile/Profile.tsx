import React from 'react';
import "./Profile.scss"
import {getJwtToken} from "../../utils/getJwtToken";
import {useGetAllUsersQuery, useGetSingleUserQuery} from "../../store/api/user/userApi";

const Profile = () => {
    const isUserExists = getJwtToken('token')
    const {data: users} = useGetAllUsersQuery()
    const currentUser = users?.find(user => user.username === isUserExists?.sub)

    return (
        <div className="profile">
            <div className="profile__title title">Персональные данные</div>
            <div className="profile__info">
                <div className="profile__name">Логин: {currentUser?.username}</div>
                <div className="profile__fio">
                    Имя пользовтеля: {currentUser?.user_detail.first_name} {currentUser?.user_detail.last_name}</div>
                <div className="profile__address address">
                    <p>Адресс</p>
                    <div className="address__city">Город: {currentUser?.addresses[0].city}</div>
                    <div className="address__street">Улица: {currentUser?.addresses[0].street_address}</div>
                    <div className="address__country">Страна: {currentUser?.addresses[0].country.country_name}</div>
                </div>

                <div className="profile__phone">Телефон: {currentUser?.phone_numbers[0].phone_number}</div>
            </div>
        </div>
    );
};

export default Profile;