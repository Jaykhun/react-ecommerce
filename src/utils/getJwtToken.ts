import {getCookie} from "../helpers/getCookie";
import jwtDecode from "jwt-decode";
import {tokenType} from "../store/reducers/tokenSlice";

export const getJwtToken = (name: string): tokenType => jwtDecode(getCookie(name))