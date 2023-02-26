import React, {FC} from 'react';
import {getJwtToken} from "../utils/getJwtToken";
import {Navigate} from "react-router-dom";

interface RequireAdmin {
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const RequireAdmin: FC<RequireAdmin> = ({children}) => {
    const token = getJwtToken('token')

    console.log(1)

    if (token.is_admin === 1) {
        return <Navigate to='/' replace={true}/>
    }

    return (
        <>
            {children}
        </>
    );
};

export default RequireAdmin;