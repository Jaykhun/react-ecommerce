import React, {FC} from 'react';
import "./UsersItem.scss";
import {IUser} from "../../../../store/api/user/userTypes";
import {useActions} from "../../../../hooks/useActions";
import {useDeleteUserMutation} from "../../../../store/api/user/userApi";

interface UsersItemPropsType {
    userInfo: IUser
}

const UsersItem: FC<UsersItemPropsType> = ({userInfo}) => {
    const {user_detail, id, username, is_admin, phone_numbers, addresses} = userInfo
    const {onUserEditPopupClick, userEdit} = useActions()
    const [deleteUser] = useDeleteUserMutation()

    const onEdit = () => {
        onUserEditPopupClick()
        userEdit(id)
    }

    const handleDeleteUser = async () => {
        await deleteUser(id)
    }

    return (
        <div className="all-users__item item">
            <div className="item__info">
                <div className="item__content">
                    <div className="item__image"><img src={user_detail.user_image} alt={username}/></div>
                    <div className="content__name">
                        <div className="item__name">{user_detail.first_name}</div>
                        <div className="item__surname">{user_detail.last_name}</div>
                        <div className="item__role">{is_admin ? 'Admin' : 'User'}</div>
                    </div>
                </div>

                <div className="item__control">
                    <div className="item__number">
                        <a href={`tel:${phone_numbers[0].phone_number}`}>{phone_numbers[0].phone_number}</a>
                    </div>
                    <div className="item__city">{addresses[0].city}</div>
                    <div className="item__street">{addresses[0].street_address}</div>
                    <div className="item__button">
                        <button className="item__change edit-btn" onClick={onEdit}></button>
                        <button className="item__delete delete-btn" onClick={handleDeleteUser}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersItem;