export interface IUser {
    username: string,
    is_admin: boolean,
    id: number,
    user_detail: userDetails,
    phone_numbers: userPhone[],
    addresses: userAddress[]
}

interface userDetails {
    first_name: string,
    last_name: string,
    user_image: string,
    id: number
}

interface userPhone {
    phone_number: number,
    type: string,
    id: number,
}

interface userAddress {
    street_address: string,
    postal_code: string,
    city: string,
    id: number,
    country: userCountry
}

interface userCountry {
    country_name: string,
    id: number
}