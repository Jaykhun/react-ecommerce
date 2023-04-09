import { Loader } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import userApi from '@/store/api/user'
import { FetchUser } from '@models/userTypes'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './UsersItem.scss'

interface UsersItemProps {
    user: FetchUser
}

const UsersItem: FC<UsersItemProps> = ({ user }) => {
    const { id, user_detail, username, addresses, phone_numbers, is_admin } = user
    const [deleteUser, result] = userApi.useDeleteUserMutation()
    const { openEditModal } = useActions()
    const navigate = useNavigate()

    const handleNavigate = () => navigate(`/admin/users/${id}`)
    const handleEdit = () => openEditModal(id)

    const handleDelete = async () => {
        try {
            await deleteUser(id).unwrap()
            Notify.success(`${user.username} успешно удален`, {
                clickToClose: true,
                fontSize: '15px'
            })
        }

        catch (e: any) {
            Notify.failure('Error', {
                clickToClose: true,
                fontSize: '15px'
            })
        }
    }

    return (
        <>
            <div className='users__item item-users'>
                <div className='item-users__body' onClick={handleNavigate}>
                    <div className="item-users__img">
                        <img src={user_detail.user_image} alt={username} />
                    </div>

                    <div className="item-users__username">
                        {username}
                    </div>

                    <div className="item-users__role">
                        {is_admin ? 'Admin' : 'User'}
                    </div>

                    <div className="item-users__phone">
                        {phone_numbers[0].phone_number}
                    </div>

                    <div className="item-users__address">
                        {addresses[0].city}, {addresses[0].street_address}
                    </div>
                </div>

                <div className="item-users__actions">
                    <div className="item-users__edit" onClick={handleEdit}></div>
                    <div className="item-users__delete" onClick={handleDelete}></div>
                </div>
            </div>
            {result.isLoading && <Loader isLoading={result.isLoading} />}
        </>
    )
}

export default UsersItem