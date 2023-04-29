import { IToken, LogInType } from '@/models/userServiceType'
import userApi from '@/store/api/user'
import { createSlice } from '@reduxjs/toolkit'

export const userLogIn = userApi.injectEndpoints({
    endpoints: build => ({
        logIn: build.mutation<IToken, LogInType>({
            query: (user) => {
                const params = new URLSearchParams({
                    username: user.username,
                    password: user.password,
                })

                return {
                    url: `token`,
                    method: 'POST',
                    body: params.toString(),
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    }
                }
            }
        })
    })
})

interface UserCartStateType {
    isTokenExist: boolean
}

const initialState: UserCartStateType = {
    isTokenExist: false
}

export const tokenState = createSlice({
    name: 'tokenState',
    initialState,
    reducers: {
        changeTokenState(state) {
            state.isTokenExist = !state.isTokenExist
        }
    }
})