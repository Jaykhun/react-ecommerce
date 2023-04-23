import { NavLink } from "react-router-dom"
import { getToken } from '@/helpers/getToken'
import { deleteToken } from '@/helpers/deleteToken'
import userApi from '@/store/api/user'
import './UserMenu.scss'
import clsx from 'clsx';

const UserMenu = () => {
    const token = getToken('token')
    const { data: users = [] } = userApi.useGetAllUsersQuery()

    const currentUser = users.find(user => user.username === token?.sub)
    const { data: user } = userApi.useGetSingleUserQuery(Number(currentUser?.id), { skip: !currentUser?.id })

    const handleLogOut = () => deleteToken('token')

    return (
        <div className='user-menu'>
            <div className="user-menu__body">
                <div className="user-menu__img">
                    <img src={user?.user_detail.user_image} alt={user?.username} />
                </div>

                <ul className="user-menu__menu">
                    <li className="user-menu__item">
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''}`}
                            to="/profile">Профиль</NavLink>
                    </li>

                    {user?.is_admin &&
                        <li className="user-menu__item">
                            <NavLink
                                className={({ isActive }) => `${isActive ? 'active-link' : ''}`}
                                to="/admin">Админ панель
                            </NavLink>
                        </li>
                    }

                    <li className="user-menu__item" onClick={handleLogOut}><NavLink to="/">Выйти</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default UserMenu