import {IUser} from "../../../../store/user/userTypes";

export interface UsersFormPropsType {
    action: any,
    user?: IUser,
    buttonValue: string
}

export type FormValues = {
    email: string,
    password: number,
    user_name: string,
    number: number,
    first_name: string,
    last_name: string,
    is_admin: boolean,
    user_image: string,
    street_address: string,
    postal_code: string,
    city: string,
    country_name: string
};