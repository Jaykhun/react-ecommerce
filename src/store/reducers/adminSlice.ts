import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../product/productTypes";
import {IUser, NewUserRoot} from "../user/userTypes";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isProductEditModalOpen: boolean,
    isUserEditModalOpen: boolean,
    productId: number
    userEdit: IUser
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isProductEditModalOpen: false,
    isUserEditModalOpen: false,
    productId: 0,
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

        productEdit: (state, action: PayloadAction<number>) => {
            state.productId = action.payload
        },

        userEdit: (state, action: PayloadAction<IUser>) => {
            state.userEdit = action.payload
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer