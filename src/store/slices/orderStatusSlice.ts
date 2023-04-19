import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    orderStatusId: number
}

const initialState: OrderStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    orderStatusId: 0
}

export const orderStatusSlice = createSlice({
    name: 'orderStatusSlice',
    initialState,
    reducers: {
        openOrderStatusAddModal(state) {
            state.isOpenAddModal = true
        },

        closeOrderStatusAddModal(state) {
            state.isOpenAddModal = false
        },

        openOrderStatusEditModal(state, actions: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.orderStatusId = actions.payload
        },

        closeOrderStatusEditModal(state) {
            state.isOpenEditModal = false
        },
    }
})