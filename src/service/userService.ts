import userApi from '@/store/api/user'
import { IToken, LogInType } from '@models/userServiceType'

export const userService = userApi.injectEndpoints({
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