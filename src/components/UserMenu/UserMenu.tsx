import { NavLink } from "react-router-dom"
import { getToken } from '@/helpers/getToken'
import { deleteToken } from '@/helpers/deleteToken'
import { Message } from '@/components/UI'
import userApi from '@/store/api/user'
import './UserMenu.scss'

const UserMenu = () => {
    const token = getToken('token')
    const users = userApi.useGetAllUsersQuery()

    const currentUser = users.data?.find(user => user.username === token?.sub)
    const user = userApi.useGetSingleUserQuery(Number(currentUser?.id), { skip: !currentUser?.id })

    const isSuccess = users.isSuccess || user.isLoading
    const isError = users.isError || user.isError
    const error = users.error || user.error

    const handleLogOut = () => deleteToken('token')

    return (
        <div className='user-menu'>
            {isError ? <Message error={error} formError='Не удалось загрузить user' />
                : <div className="user-menu__body">
                    <div className="user-menu__img">
                        <img src={user.data?.user_detail.user_image} alt={user.data?.username} />
                    </div>

                    {isSuccess && <ul className="user-menu__menu">
                        <li className="user-menu__item">
                            <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''}`}
                                to="/profile">Профиль</NavLink>
                        </li>

                        {user.data?.is_admin &&
                            <li className="user-menu__item">
                                <NavLink
                                    className={({ isActive }) => `${isActive ? 'active-link' : ''}`}
                                    to="/admin">Админ панель
                                </NavLink>
                            </li>
                        }

                        <li className="user-menu__item" onClick={handleLogOut}><NavLink to="/">Выйти</NavLink></li>
                    </ul>
                    }
                </div>
            }
        </div>
    )
}

export default UserMenu