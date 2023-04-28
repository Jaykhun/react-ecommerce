import { FetchProduct } from './productTypes'

export interface LogInType {
    username: string,
    password: string
}

export interface IToken {
    access_token: string
}

export const WebStoragePath = {
    token: 'token'
} as const

export interface CartProduct extends FetchProduct {
    count: number
}