import React, {FC, useState} from 'react';
import {getCookie} from "../helpers/getCookie";
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {getJwtToken} from "../utils/getJwtToken";
import {tokenType} from "../store/reducers/tokenSlice";

interface RequireAuth {
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const RequireAuth: FC<RequireAuth> = ({children}) => {
    const [isAdmin, setAdmin] = useState(false)
    const location = useLocation();
    const token: tokenType = getJwtToken('token')

    if (!getCookie('token')) {
        return <Navigate to='/login' state={{from: location}} replace={true}/>
    } else if (token.is_admin === 0) {
        setAdmin(prevState => !prevState)
    }

    return (
        <>
            {isAdmin ? children : ''}
        </>
    )
};

export default RequireAuth;