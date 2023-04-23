import { Cookies } from 'react-cookie'

type setTokenType = (token: string) => void

export const setToken: setTokenType = (token) => {
    const cookie = new Cookies()
    cookie.set('token', token)
}