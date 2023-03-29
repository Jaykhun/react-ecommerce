import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    isOpenAddModal: boolean
    isOpenEditModal: boolean,
    userId: number
}

const initialState: UserState = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    userId: 0
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        openAddModal(state) {
            state.isOpenAddModal = !state.isOpenAddModal
        },
        closeAddModal(state) {
            state.isOpenAddModal = !state.isOpenAddModal
        },

        openEditModal(state, action) {
            state.isOpenEditModal = !state.isOpenEditModal
            state.userId = action.payload
        },
        closeEditModal(state) {
            state.isOpenEditModal = !state.isOpenEditModal
        }
    },
}) 