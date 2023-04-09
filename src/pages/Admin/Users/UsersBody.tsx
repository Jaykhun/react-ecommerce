import { Loader, Message } from '@/components/UI'
import userApi from '@/store/api/user'
import UsersItem from './UsersItem'

const UsersBody = () => {
    const { data: users, isError, error, isFetching } = userApi.useGetAllUsersQuery()

    return (
        <div className='users__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
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