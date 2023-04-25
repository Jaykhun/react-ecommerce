import { UsersAdd, UsersBody, UsersEdit, UsersHeader } from './index'
import './Users.scss'

const Users = () => {
    return (
        <div className='users'>
            <UsersHeader />
            <UsersBody />
            <UsersAdd />
            <UsersEdit />
        </div>
    )
}

export default Users