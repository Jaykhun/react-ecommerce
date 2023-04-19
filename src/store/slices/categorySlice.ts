import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoryStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean
    categoryId: number
}

const initialState: CategoryStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    categoryId: 0
}

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        openCategoryAddModal(state) {
            state.isOpenAddModal = true
        },
        closeCategoryAddModal(state) {
            state.isOpenAddModal = false
        },

        openCategoryEditModal(state, action: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.categoryId = action.payload
        },
        closeCategoryEditModal(state) {
            state.isOpenEditModal = false
        }
    }
})