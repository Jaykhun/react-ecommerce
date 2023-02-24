import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cookies} from "react-cookie";

export type Decode = {
    sub: string,
    is_admin: number,
    exp:number
}

const initialState = {
    token: ''
}

export const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const cookie = new Cookies()
            console.log(1)

            if (cookie.get('token') === undefined) {
                console.log(1)
                state.token = action.payload
                cookie.set('token', state.token)
            } else state.token = cookie.get('token')
        },

        logout: (state) => {
            const cookie = new Cookies()
            cookie.remove('token')
            state.token = ''
        }
    }
})

export const tokenActions = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer