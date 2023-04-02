import Message from '@/components/UI/Message'
import userApi from '@/store/api/user'
import UsersItem from './UsersItem'

const UsersBody = () => {
    const { data: users, isLoading, isError, error } = userApi.useGetAllUsersQuery()

    return (
        <div className='users__body'>
            {
                isLoading
                    ? <p>Loading</p>
                    : isError
                        ? <Message error={error} />
                        : users?.length
                            ? users?.map(user => <UsersItem user={user} key={user.id} />)
                            : <Message value='нет пользователи' />
            }
        </div>
    )
}

export default UsersBody