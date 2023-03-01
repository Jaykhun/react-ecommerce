export interface Order {
    user_id: number | undefined,
    order_date: string,
    address_id: number | undefined,
    order_status_id: number
}

export interface OrderDetails {
    product_id: number | undefined,
    quantity: number,
    price: number | undefined
}

export interface AddOrderType {
    order: Order,
    order_details: OrderDetails[]
}

export interface UserOrders {
    user_id: number,
    order_date: string,
    address_id: number,
    id: number,
    order_details: OrderDetails[],
    order_status: OrderStatus
}

export interface OrderStatus {
    status: string,
    id: number
}