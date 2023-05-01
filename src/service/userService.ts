import { IToken, LogInType } from '@/models/userServiceType'
import userApi from '@/store/api/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const userLogIn = userApi.injectEndpoints({
    endpoints: build => ({
        logIn: build.mutation<IToken, LogInType>({
            query: (user) => {
                const params = new URLSearchParams({
                    username: user.username,
                    password: user.password,
                })


                console.log(params.toString());
                

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
    userId?: number
}

const initialState: UserCartStateType = {
    userId: 0
}

export const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        getUser(state, actions: PayloadAction<number| undefined>) {
            state.userId = actions.payload
        }
    }
})