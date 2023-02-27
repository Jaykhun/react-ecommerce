import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { getJwtToken } from "../utils/getJwtToken"

interface RequireAdmin {
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const RequireAdmin = () => {
    const token = getJwtToken('token')

    return (
        <>
            {token?.is_admin ? <Outlet /> : <Navigate to="/login" replace={true} />}
        </>
    )
}

export default RequireAdmin