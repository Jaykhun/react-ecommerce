import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface adminSliceTypes {
    isAdminMenuOpen: boolean,
    isProductEditModalOpen: boolean,
    isUserEditModalOpen: boolean,
    isCountryEditModalOpen: boolean,
    isCategoryEditModalOpen: boolean,
    productId: number,
    countryId: number,
    userId: number,
    categoryId: number,
}

const initialState: adminSliceTypes = {
    isAdminMenuOpen: false,
    isProductEditModalOpen: false,
    isUserEditModalOpen: false,
    isCountryEditModalOpen: false,
    isCategoryEditModalOpen: false,
    productId: 0,
    countryId: 0,
    userId: 0,
    categoryId: 0
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

        onCategoryEditPopupClick: (state) => {
            state.isCategoryEditModalOpen = !state.isCategoryEditModalOpen
        },

        productEdit: (state, action: PayloadAction<number>) => {
            state.productId = action.payload
        },

        countryEdit: (state, action: PayloadAction<number>) => {
            state.countryId = action.payload
        },

        userEdit: (state, action: PayloadAction<number>) => {
            state.userId = action.payload
        },

        categoryEdit: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        }
    }
})

export const adminActions = adminSlice.actions
export const adminReducer = adminSlice.reducer