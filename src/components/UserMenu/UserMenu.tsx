import {NavLink} from "react-router-dom"
import {useActions} from "../../hooks/useActions"
import {useGetAllUsersQuery, useGetSingleUserQuery} from "../../store/api/user/userApi"
import {getJwtToken} from "../../helpers/getJwtToken"
import "./UserMenu.scss"
import {Loader} from "./index"

const UserMenu = () => {
    const userinfo = getJwtToken('token')
    const {data: users} = useGetAllUsersQuery()
    const currentUser = users?.find(user => user.username === userinfo?.sub)
    const {data: user, isLoading: userLoading} = useGetSingleUserQuery(currentUser?.id)
    const {logout} = useActions()

    return (
        <div className="user-menu">
            <div className="user-menu__photo">
                {userLoading
                    ? <Loader/>
                    : <img src={user?.user_detail.user_image} alt={user?.username}/>
                }
            </div>

            <ul className="user-menu__menu">
                <li className="user-menu__item"><NavLink className={({isActive}) => `${isActive ? 'active-link' : ''}`}
                                                         to="/profile">Профиль</NavLink></li>
                {user?.is_admin && <li className="user-menu__item"><NavLink
                    className={({isActive}) => `${isActive ? 'active-link' : ''}`}
                    to="/admin">Админ панель</NavLink></li>}
                <li className="user-menu__item" onClick={() => logout()}><NavLink to="/">Выйти</NavLink></li>
            </ul>
        </div>
    )
}

export default UserMenu