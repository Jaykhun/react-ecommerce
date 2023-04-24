import { Cookies } from 'react-cookie'
import { WebStoragePath } from '@/models/userServiceType'

type setTokenType = (token: string) => void

export const setToken: setTokenType = (token) => {
    const cookie = new Cookies()
    cookie.set(WebStoragePath.token, token)
}