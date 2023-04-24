import { Cookies } from "react-cookie"

type deleteTokenType = (token: string) => void

export const deleteToken: deleteTokenType = (token) => {
    const cookie = new Cookies()
    cookie.remove(token)
}