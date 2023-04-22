import { Cookies } from 'react-cookie'

export const setToken = (token: string): void => {
    const cookie = new Cookies()
    cookie.set('token', token)
}