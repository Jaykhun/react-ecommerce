import UsersForm from "./UsersForm";
import { v4 as keyId } from "uuid"
import { useAddUserMutation, useGetAllUsersQuery } from "../../../store/user/userApi";
import { UsersItem, UsersLoader } from "./index";
import { Error, Message } from "../../../components/UI";
import { IUser } from "../../../store/user/userTypes";
import "./Users.scss";

const Users = () => {
    const { data, isLoading, isError, error } = useGetAllUsersQuery()
    const [addUser] = useAddUserMutation()

    return (
        <div className="all-users">
            <UsersForm action={addUser} buttonValue='Добавить' />

            <div className="all-users__body">
                <div className="all-users__title title">Пользователи</div>
                <div className="all-users__content">
                    {
                        isLoading ?
                            <UsersLoader />
                            : error
                                ? <Error error={error} />
                                : data?.length === 0
                                    ? <Message value="нет пользователи" />
                                    : data?.map((item: IUser) => <UsersItem user={item} key={keyId()} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;