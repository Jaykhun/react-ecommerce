import { Loader, Message } from '@/components/UI'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import userApi from '@/store/api/user'
import './Profile.scss'

const Profile = () => {
    const { userId } = useTypedSelector(state => state.userState)
    const { data: user, isError, error } = userApi.useGetSingleUserQuery(Number(userId), { skip: !userId })

    return (
        <div className='profile'>
            {!user?.id
                ? <Loader isLoading={!user?.id} />
                : isError
                    ? <Message error={error} />
                    : <>
                        <div className="profile__title">Профиль</div>

                        <div className="profile__body">
                            <div className="profile__info info-details">
                                <div className="profile__img">
                                    <img src={user?.user_detail.user_image} alt={user?.username} />
                                </div>

                                <div className="info-details__body">
                                    <div className="users-details__username">
                                        <span className='profile__txt'>Логин:</span>
                                        <span>{user?.username}</span>
                                    </div>

                                    <div className="profile-details__role">
                                        <span className='profile__txt'>Статус:</span>
                                        <span>{user?.is_admin ? 'Admin' : 'User'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profile__firstname">
                                <span className='profile__txt'>Имя:</span>
                                <span>{user?.user_detail.first_name}</span>
                            </div>

                            <div className="profile__lastname">
                                <span className='profile__txt'>Фамилия:</span>
                                <span>{user?.user_detail.last_name}</span>
                            </div>

                            <div className="profile__phone">
                                <span className='profile__txt'>Номер телефона:</span>
                                <a href={`tel:${user?.phone_numbers[0].phone_number}`}>{user?.phone_numbers[0].phone_number}</a>
                            </div>

                            <div className="profile__phonetype">
                                <span className='profile__txt'>Тип номера:</span>
                                <span>{user?.phone_numbers[0].type}</span>
                            </div>

                            <div className="profile__country">
                                <span className='profile__txt'>Страна:</span>
                                <span>{user?.addresses[0].country.country_name}</span>
                            </div>

                            <div className="profile__city">
                                <span className='profile__txt'>Город:</span>
                                <span>{user?.addresses[0].city}</span>
                            </div>

                            <div className="profile__street">
                                <span className='profile__txt'>Улица:</span>
                                <span>{user?.addresses[0].street_address}</span>
                            </div>

                            <div className="profile__postalcode">
                                <span className='profile__txt'>Почтовый индекс:</span>
                                <span>{user?.addresses[0].postal_code}</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Profile