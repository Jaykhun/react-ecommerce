import { Loader, Message } from '@/components/UI'
import userApi from '@/store/api/user'
import UsersItem from './UsersItem'

const UsersBody = () => {
    const { data: users, isLoading, isError, error } = userApi.useGetAllUsersQuery()

    return (
        <div className='users__body'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
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