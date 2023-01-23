import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../product/productTypes";
import {IUser} from "../user/userTypes";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isProductEditModalOpen: boolean,
    isUserEditModalOpen: boolean,
    productEdit: IProduct
    userEdit: IUser
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isProductEditModalOpen: false,
    isUserEditModalOpen: false,
    productEdit: {} as IProduct,
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

        productEdit: (state, action: PayloadAction<IProduct>) => {
            state.productEdit = action.payload
        },

        userEdit: (state, action: PayloadAction<IUser>) => {
            state.userEdit = action.payload
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer