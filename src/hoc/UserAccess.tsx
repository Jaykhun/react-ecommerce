import { getToken } from '@/helpers/getToken'
import { Navigate, Outlet } from 'react-router-dom'

const UserAccess = () => {
    const token = getToken('token')

    return (
        <>
            {token
                ? <Outlet />
                : <Navigate to="/login" replace />
            }
        </>
    )
}

export default UserAccess