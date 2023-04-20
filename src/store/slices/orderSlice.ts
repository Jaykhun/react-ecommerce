import { OrderDetails } from '@/models/orderTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderStateType {
    isOpenOrderDetailsModal: boolean
    isOpenEditModal: boolean
    orderId: number,
    orderDetails: OrderDetails[]
}

const initialState: OrderStateType = {
    isOpenOrderDetailsModal: false,
    isOpenEditModal: false,
    orderId: 0,
    orderDetails: []
}

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        openOrderDetailsModal(state, actions: PayloadAction<OrderDetails[]>) {
            state.isOpenOrderDetailsModal = true
            state.orderDetails = actions.payload
        },

        closeOrderDetailsModal(state) {
            state.isOpenOrderDetailsModal = false
        },

        openOrderEditModal(state, actions: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.orderId = actions.payload
        },

        closeOrderEditModal(state) {
            state.isOpenEditModal = false
        },
    }
})