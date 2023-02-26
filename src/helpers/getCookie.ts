import {Cookies} from "react-cookie";

export const getCookie = (name: string) => {
    const cookie = new Cookies()

    if (cookie.get(name) !== undefined) {
        return cookie.get(name)
    }

    return false
}