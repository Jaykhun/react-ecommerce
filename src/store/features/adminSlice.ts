import {createSlice} from "@reduxjs/toolkit";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isEditModalOpen: boolean,
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isEditModalOpen: false
}

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        onAdminMenuClick: (state) => {
            state.isAdminMenuOpen = !state.isAdminMenuOpen
        },

        onEditPopupClick: (state) => {
            console.log(state.isEditModalOpen)
            state.isEditModalOpen = !state.isEditModalOpen
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer