export interface NewUserRoot {
    user: NewUser
    user_detail: NewUserDetail
    user_phones: NewUserPhone[]
    user_address: NewUserAddress
}

export interface NewUser {
    username: string
    is_admin: boolean
    password: string
}

export interface NewUserDetail {
    first_name: string
    last_name: string
    user_image: string
}

export interface NewUserPhone {
    phone_number: string
    type: string
}

export interface NewUserAddress {
    street_address: string
    postal_code: string
    city: string
    country_id: number
}

// update user
export interface UpdateUserRoot {
    user: UpdateUser
    user_detail: UpdateUserDetail
}

export interface UpdateUser {
    username: string
    is_admin: boolean
}

export interface UpdateUserDetail {
    first_name: string
    last_name: string
    user_image: string
}

export interface IUser {
    username: string
    is_admin: boolean
    id: number
    user_detail: UserDetail
    phone_numbers: PhoneNumber[]
    addresses: Address[]
}

export interface UserDetail {
    first_name: string
    last_name: string
    user_image: string
    id: number
}

export interface PhoneNumber {
    phone_number: string
    type: string
    id: number
}

export interface Address {
    street_address: string
    postal_code: string
    city: string
    id: number
    country: Country
}

export interface Country {
    country_name: string
    id: number
}