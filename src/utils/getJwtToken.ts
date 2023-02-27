import jwtDecode from "jwt-decode"
import { getCookie } from "../helpers/getCookie"
import { tokenType } from "../store/reducers/tokenSlice"

export const getJwtToken = (name: string): tokenType | undefined => {
    const cookie = getCookie(name)
    if (cookie) {
        return jwtDecode(cookie)
    }
}