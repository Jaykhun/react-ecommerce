import {IUser, NewUserRoot} from "../../../../store/user/userTypes";

export interface UsersFormPropsType {
    user?: NewUserRoot | IUser,
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