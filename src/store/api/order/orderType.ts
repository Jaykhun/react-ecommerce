export interface Order {
    user_id: number,
    order_date: string,
    address_id: number,
    order_status_id: number
}

export interface OrderDetails {
    "product_id": number,
    "quantity": number,
    "price": number
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