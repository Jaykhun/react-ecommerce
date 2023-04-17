export interface ICall {
    full_name: string
    phone_number: string,
    start_time: string,
    end_time: string,
    comment: string | null,
}

export interface FetchCall extends ICall {
    id: number
}