export interface UserPhone {
    phone_number: string,
    type: string
}

export interface UserAddress {
    street_address: string,
    postal_code: string,
    city: string,
    country: {
        country_name: string,
        id: number
    }
}

export interface UserDetail {
    first_name: string,
    last_name: string,
    user_image: string
}

export interface AddUserAddress {
    street_address: string,
    postal_code: string,
    city: string,
    country_id: number
}

export interface FetchUserDetail extends UserDetail {
    id: number
}

export interface FetchUserPhone extends UserPhone {
    id: number
}

export interface FetchUserAddress extends UserAddress {
    id: number
}

export interface FetchUser {
    username: string,
    is_admin: boolean,
    id: number,
    user_detail: FetchUserDetail,
    phone_numbers: FetchUserPhone[],
    addresses: FetchUserAddress[]
}

export interface AddUser {
    user: {
        username: string,
        password: string
    },
    user_detail: UserDetail,
    user_phones: UserPhone[],
    user_address: AddUserAddress[]
}

export interface EditUser {
    user: {
        username: string
    },
    user_detail: UserDetail
}