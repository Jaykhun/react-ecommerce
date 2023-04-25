import { getToken } from '@/helpers/getToken'
import { Navigate, Outlet } from 'react-router-dom'

const AdminAccess = () => {
    const token = getToken('token')

    return (
        <>
            {token?.is_admin
                ? <Outlet />
                : <Navigate to="/login" replace/>
            }
        </>
    )
}

export default AdminAccess