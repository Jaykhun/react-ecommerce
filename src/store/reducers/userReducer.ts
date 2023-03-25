import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    isOpen: boolean
    isOpenEditModal: boolean,
    userId: number
}

const initialState: UserState = {
    isOpen: false,
    isOpenEditModal: false,
    userId: 0
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        openAddModal(state) {
            state.isOpen = true
        },
        closeAddModal(state) {
            state.isOpen = false
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