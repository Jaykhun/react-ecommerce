import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../user/userTypes";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isProductEditModalOpen: boolean,
    isUserEditModalOpen: boolean,
    isCountryEditModalOpen: boolean,
    productId: number,
    countryId: number,
    userEdit: IUser
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isProductEditModalOpen: false,
    isUserEditModalOpen: false,
    isCountryEditModalOpen: false,
    productId: 0,
    countryId: 0,
    userEdit: {} as IUser
}

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        onAdminMenuClick: (state) => {
            state.isAdminMenuOpen = !state.isAdminMenuOpen
        },

        onProductEditPopupClick: (state) => {
            state.isProductEditModalOpen = !state.isProductEditModalOpen
        },

        onUserEditPopupClick: (state) => {
            state.isUserEditModalOpen = !state.isUserEditModalOpen
        },

        onCountryEditPopupClick: (state) => {
            state.isCountryEditModalOpen = !state.isCountryEditModalOpen
        },

        productEdit: (state, action: PayloadAction<number>) => {
            state.productId = action.payload
        },

        countryEdit: (state, action: PayloadAction<number>) => {
            state.countryId = action.payload
        },

        userEdit: (state, action: PayloadAction<IUser>) => {
            state.userEdit = action.payload
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer