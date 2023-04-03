import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean,
    userId: number
}

const initialState: UserStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    userId: 0
}

export const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        openAddModal(state) {
            state.isOpenAddModal = true
        },
        closeAddModal(state) {
            state.isOpenAddModal = false
        },

        openEditModal(state, action: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.userId = action.payload
        },
        closeEditModal(state) {
            state.isOpenEditModal = false
        }
    },
}) 