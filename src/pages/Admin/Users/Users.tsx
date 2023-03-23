
import { UsersHeader } from './index'
import './Users.scss'

const Users = () => {
    return (
        <div className='users'>
            <div className="users__title">Пользователи</div>
            <UsersHeader />
        </div>
    )
}

export default Users