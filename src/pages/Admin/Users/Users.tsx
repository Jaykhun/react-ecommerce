import { UsersHeader, UsersBody } from './index'
import './Users.scss'

const Users = () => {
    window.scrollTo(0, 0)

    return (
        <div className='users'>
            <UsersHeader />
            <UsersBody />
        </div>
    )
}

export default Users