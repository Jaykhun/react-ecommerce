import jwtDecode from "jwt-decode"
import { Cookies } from 'react-cookie'

interface IToken {
    exp: number,
    is_admin: number,
    sub: string
}

export const getToken = (token: string): IToken | null => {
    const cookie = new Cookies()
    const res = cookie.get(token)
    if (res) return jwtDecode(res)
    return null
}