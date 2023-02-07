export interface IUser {
    username: string
    password: string
    is_admin: boolean
    id?: number
    user_detail: UserDetail
    phone_numbers: PhoneNumber
    addresses: Address
}

export interface UserDetail {
    first_name: string
    last_name: string
    user_image: string
    id?: number
}

export interface PhoneNumber {
    phone_number: string
    type: string
    id?: number
}

export interface Address {
    street_address: string
    postal_code: string
    city: string
    id?: number
    country: Country
}

export interface Country {
    country_name: string
    id?: number
}