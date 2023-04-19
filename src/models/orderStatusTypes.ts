export interface IOrderStatus {
    status: string
}

export interface FetchOrderStatus extends IOrderStatus {
    id: number
}

export interface MutationOrderStatusType extends IOrderStatus {
    id: number
}