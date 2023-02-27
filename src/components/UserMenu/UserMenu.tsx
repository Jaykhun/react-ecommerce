import {NavLink} from "react-router-dom"
import {useActions} from "../../hooks/useActions"
import {useGetAllUsersQuery} from "../../store/api/user/userApi"
import {getJwtToken} from "../../utils/getJwtToken"
import "./UserMenu.scss"
import {Loader} from "./index"

const UserMenu = () => {
    const userinfo = getJwtToken('token')
    const {data: users, isLoading} = useGetAllUsersQuery()
    const currentUser = users?.find(user => user.username === userinfo?.sub)
    const {logout} = useActions()

    return (
        <div className="user-menu">
            <div className="user-menu__photo">
                {isLoading
                    ? <Loader/>
                    : <img src={currentUser?.user_detail.user_image} alt={currentUser?.username}/>
                }
            </div>

            <ul className="user-menu__menu">
                <li className="user-menu__item"><NavLink className={({isActive}) => `${isActive ? 'active-link' : ''}`}
                                                         to="/profile">Профиль</NavLink></li>
                <li className="user-menu__item"><NavLink className={({isActive}) => `${isActive ? 'active-link' : ''}`}
                                                         to="/admin">Админ панель</NavLink></li>
                <li className="user-menu__item" onClick={() => logout()}><NavLink to="/">Выйти</NavLink></li>
            </ul>
        </div>
    )
}

export default UserMenu