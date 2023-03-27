import { Loader, Message } from '@/components/UI'
import userApi from '@/store/api/user'
import { useParams } from 'react-router-dom'
import './UsersDetails.scss'

const UsersDetails = () => {
    window.scrollTo(0, 0)
    const { id } = useParams()
    const { data: user, isLoading, isError, error } = userApi.useGetSingleUserQuery(Number(id))

    return (
        <div className='users-details'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : <>
                            <div className="users-details__title">
                                Информация о пользователе
                            </div>
                            <div className="users-details__body">
                                <div className="users-details__info info-details">
                                    <div className="users-details__img">
                                        <img src={user?.user_detail.user_image} alt={user?.username} />
                                    </div>

                                    <div className="info-details__body">
                                        <div className="users-details__username">
                                            <span className='users-details__txt'>Логин:</span>
                                            <span>{user?.username}</span>
                                        </div>

                                        <div className="users-details__role">
                                            <span className='users-details__txt'>Статус:</span>
                                            <span>{user?.is_admin ? 'Admin' : 'User'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-details__firstname">
                                    <span className='users-details__txt'>Имя:</span>
                                    <span>{user?.user_detail.first_name}</span>
                                </div>

                                <div className="users-details__lastname">
                                    <span className='users-details__txt'>Фамилия:</span>
                                    <span>{user?.user_detail.last_name}</span>
                                </div>

                                <div className="users-details__phone">
                                    <span className='users-details__txt'>Номер телефона:</span>
                                    <a href={`tel:${user?.phone_numbers[0].phone_number}`}>{user?.phone_numbers[0].phone_number}</a>
                                </div>

                                <div className="users-details__phonetype">
                                    <span className='users-details__txt'>Тип номера:</span>
                                    <span>{user?.phone_numbers[0].type}</span>
                                </div>

                                <div className="users-details__country">
                                    <span className='users-details__txt'>Страна:</span>
                                    <span>{user?.addresses[0].country.country_name}</span>
                                </div>

                                <div className="users-details__city">
                                    <span className='users-details__txt'>Город:</span>
                                    <span>{user?.addresses[0].city}</span>
                                </div>

                                <div className="users-details__street">
                                    <span className='users-details__txt'>Улица:</span>
                                    <span>{user?.addresses[0].street_address}</span>
                                </div>

                                <div className="users-details__postalcode">
                                    <span className='users-details__txt'>Почтовый индекс:</span>
                                    <span>{user?.addresses[0].postal_code}</span>
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}

export default UsersDetails