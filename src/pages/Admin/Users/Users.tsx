import userApi from '@/store/api/user'
import { UsersHeader, UsersItem } from './index'
import './Users.scss'

const Users = () => {
    const { data: users, isLoading, isError, error } = userApi.useGetAllUsersQuery()
    return (
        <div className='users'>
            <div className="users__title">Пользователи</div>
            <UsersHeader />
            {users?.map(user => <UsersItem user={user} key={user.id} />)}
        </div>
    )
}

export default Users