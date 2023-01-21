import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../product/productTypes";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isEditModalOpen: boolean,
    productEdit: IProduct
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isEditModalOpen: false,
    productEdit: {} as IProduct
}

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        onAdminMenuClick: (state) => {
            state.isAdminMenuOpen = !state.isAdminMenuOpen
        },

        onEditPopupClick: (state) => {
            state.isEditModalOpen = !state.isEditModalOpen
        },

        productEdit: (state, action: PayloadAction<IProduct>) =>{
            state.productEdit = action.payload
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer