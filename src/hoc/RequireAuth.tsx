import {Navigate, Outlet} from "react-router-dom"
import { getJwtToken } from "../helpers/getJwtToken"

const RequireAuth = () => {
    const token = getJwtToken('token')

    return (
        <>
            {token?.is_admin ? <Outlet /> : <Navigate to="/login" replace={true} />}
        </>
    )
};

export default RequireAuth;