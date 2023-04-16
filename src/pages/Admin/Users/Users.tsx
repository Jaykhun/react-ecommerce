import { UsersBody, UsersHeader } from './index'
import './Users.scss'

const Users = () => {
    return (
        <div className='users'>
            <UsersHeader />
            <UsersBody />
        </div>
    )
}

export default Users