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
    name: 'userSlice',
    initialState,
    reducers: {
        openUserAddModal(state) {
            state.isOpenAddModal = true
        },
        closeUserAddModal(state) {
            state.isOpenAddModal = false
        },

        openUserEditModal(state, action: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.userId = action.payload
        },
        closeUserEditModal(state) {
            state.isOpenEditModal = false
        }
    },
}) 