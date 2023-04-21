import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AttributeStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    attributeId: number
}

const initialState: AttributeStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    attributeId: 0
}

export const attributeSlice = createSlice({
    name: 'attributeSlice',
    initialState,
    reducers: {
        openAttributeAddModal(state) {
            state.isOpenAddModal = true
        },
        closeAttributeAddModal(state) {
            state.isOpenAddModal = false
        },

        openAttributeEditModal(state, action: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.attributeId = action.payload
        },
        closeAttributeEditModal(state) {
            state.isOpenEditModal = false
        },
    }
})