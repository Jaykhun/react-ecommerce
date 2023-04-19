import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    isOpenProductModal: boolean
    orderId: number
}

const initialState: OrderStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    isOpenProductModal: false,
    orderId: 0
}


export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        openProductModal(state) {
            state.isOpenProductModal = true
        },

        closeProductModal(state) {
            state.isOpenProductModal = false
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