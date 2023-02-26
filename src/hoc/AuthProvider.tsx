import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import {getCookie} from "../helpers/getCookie";
import {Navigate} from "react-router-dom";

interface AuthProvider {
    children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const AuthProvider: FC<AuthProvider> = ({children}) => {
    const location = useLocation();

    if (getCookie('token')) {
        return <Navigate to='/' state={{from: location}} replace/>
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;