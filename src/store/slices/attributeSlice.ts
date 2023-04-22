import { FetchVariants } from '@/models/attributeTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AttributeStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    isOpenViewModal: boolean
    attributeId: number,
    variants: FetchVariants[]
}

const initialState: AttributeStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    isOpenViewModal: false,
    attributeId: 0,
    variants: []
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

        openAttributeViewdModal(state, actions: PayloadAction<{variants: FetchVariants[], id: number}>) {
            state.isOpenViewModal = true
            state.variants = actions.payload.variants
            state.attributeId = actions.payload.id
        },
        closeAttributeViewModal(state) {
            state.isOpenViewModal = false
        },
    }
})