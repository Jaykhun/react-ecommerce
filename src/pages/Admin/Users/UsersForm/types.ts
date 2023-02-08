import {IUser} from "../../../../store/user/userTypes";

export interface UsersFormPropsType {
    id?: number,
    buttonValue: string
}

export type FormValues = {
    email: string,
    password: string,
    user_name: string,
    number: string,
    first_name: string,
    last_name: string,
    is_admin: boolean,
    user_image: string,
    street_address: string,
    postal_code: string,
    city: string,
    country_name: string
};