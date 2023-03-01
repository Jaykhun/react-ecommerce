import { useGetAllUsersQuery } from '../store/api/user/userApi'
import { getJwtToken } from './getJwtToken'

export const GetCurrentUser = (name: string) => {
    const currentUser = getJwtToken(name)
    const { data: users } = useGetAllUsersQuery()
    const user = users?.find(user => user.username === currentUser?.sub)

    if (user) {
        return user
    }
}