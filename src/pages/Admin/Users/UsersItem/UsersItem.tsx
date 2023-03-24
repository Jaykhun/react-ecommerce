import { FetchUser } from '@models/user'
import { FC } from 'react'

interface UsersItemProps {
    user: FetchUser
}

const UsersItem: FC<UsersItemProps> = ({ user }) => {
    const { id, user_detail, username, addresses, phone_numbers } = user
    return (
        <div>{user.username}</div>
    )
}

export default UsersItem