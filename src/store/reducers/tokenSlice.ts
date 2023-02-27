import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cookies} from "react-cookie";

export interface tokenType {
    sub: string,
    is_admin: number,
    exp: number
}

interface tokenState {
    token: string
}

const initialState: tokenState = {
    token: ''
}

export const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const cookie = new Cookies()

            if (cookie.get('token') === undefined) {
                state.token = action.payload
                cookie.set('token', action.payload)
            } else state.token = cookie.get('token')
        },

        logout: (state) => {
            const cookie = new Cookies()
            cookie.remove('token')
            console.log(cookie.get('token'))
            state.token = ''
        }
    }
})

export const tokenActions = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer