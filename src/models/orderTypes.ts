import { FetchOrderStatus } from './orderStatusTypes'

export interface OrderDetails {
    product_id: number,
    quantity: number,
    price: number
}

export interface FetchOrder {
    user_id: number,
    order_date: string,
    address_id: number,
    id: number,
    order_details: OrderDetails[],
    order_status: FetchOrderStatus
}

export interface AddOrder {
    order: {
        user_id: number,
        order_date: string,
        address_id: number,
        order_status_id: number
    },
    order_details: OrderDetails[]
}

export interface EditOrder {
    user_id: number,
    order_date: string,
    address_id: number,
    order_status_id: number
}