import { Message } from '@/components/UI'
import { deleteToken } from '@/helpers/deleteToken'
import { getToken } from '@/helpers/getToken'
import { useServiceActions } from '@/hooks/useServiceActions'
import { WebStoragePath } from '@/models/userServiceType'
import userApi from '@/store/api/user'
import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import './UserMenu.scss'

const UserMenu = () => {
    const navigate = useNavigate()
    const { getUser } = useServiceActions()
    const token = getToken(WebStoragePath.token)
    
    const users = userApi.useGetAllUsersQuery()
    const currentUser = users.data?.find(user => user.username === token?.sub)
    const user = userApi.useGetSingleUserQuery(Number(currentUser?.id), { skip: !currentUser?.id })

    const isSuccess = users.isSuccess || user.isSuccess
    const isError = users.isError || user.isError
    const error = users.error || user.error

    const handleLogOut = () => {
        deleteToken(WebStoragePath.token)
        getUser(0)
        navigate('/')
    }

    useEffect(() => {
        if (user.isSuccess) {
            getUser(user.data.id)
        }
    }, [user.isSuccess])



    return (
        <div className='user-menu'>
            {isError
                ? <Message error={error} formError='Не удалось загрузить user' />
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

                        <li className="user-menu__logout" onClick={handleLogOut}>Выйти</li>
                    </ul>
                    }
                </div>
            }
        </div>
    )
}

export default UserMenu