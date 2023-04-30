import { getToken } from '@/helpers/getToken'
import { WebStoragePath } from '@/models/userServiceType'
import { Navigate, Outlet } from 'react-router-dom'

const AdminAccess = () => {
    const token = getToken(WebStoragePath.token)

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