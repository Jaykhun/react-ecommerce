export interface ICallBack {
    full_name: string,
    phone_number: number,
    start_time: string,
    end_time: string,
    comment: string
}

export interface FetchCallBack extends ICallBack {
    id: number
}