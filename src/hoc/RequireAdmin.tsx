import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { getJwtToken } from "../helpers/getJwtToken"

const RequireAdmin = () => {
    const token = getJwtToken('token')

    return (
        <>
            {token?.is_admin ? <Outlet /> : <Navigate to="/login" replace={true} />}
        </>
    )
}

export default RequireAdmin