import React from 'react';
import UsersForm from "./UsersForm";
import "./Users.scss";
import {useAddUserMutation, useGetAllUsersQuery} from "../../../store/user/userApi";
import {UsersItem} from "./index";
import {v4 as keyId} from "uuid"

const Users = () => {
    const {data, isLoading, isError} = useGetAllUsersQuery()
    const [addUser] = useAddUserMutation()
    return (
        <div className="all-users">
            <UsersForm action={addUser} buttonValue='Добавить'/>

            <div className="all-users__body">
                <div className="all-users__title title">Пользователи</div>
                <div className="all-users__content">
                    {data?.map(user => <UsersItem user={user} key={keyId()}/>)}
                </div>
            </div>
        </div>
    );
};

export default Users;