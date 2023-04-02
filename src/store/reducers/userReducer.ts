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
            state.isOpenAddModal = true
        },
        closeAddModal(state) {
            state.isOpenAddModal = false
        },

        openEditModal(state, action) {
            state.isOpenEditModal = true
            state.userId = action.payload
        },
        closeEditModal(state) {
            state.isOpenEditModal = false
        }
    },
}) 