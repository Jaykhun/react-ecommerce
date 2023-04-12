import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean,
    productId: number
}

const initialState: ProductStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    productId: 0
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        openProductAddModal(state) {
            state.isOpenAddModal = true
        },

        closeProductAddModal(state) {
            state.isOpenAddModal = false
        },

        openProductEditModal(state, actions: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.productId = actions.payload
        },

        closeProductEditModal(state) {
            state.isOpenEditModal = false
        },
    }
})