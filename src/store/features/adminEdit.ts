import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../product/productTypes";

interface adminEditTypes{
    productEdit: IProduct
}

const initialState: adminEditTypes = {
    productEdit: {} as IProduct
}

const adminEdit = createSlice({
    name: 'adminEdit',
    initialState,
    reducers: {
        editProduct: (state, action) =>{
            state.productEdit = action.payload
        }
    }
})

export const editActions = adminEdit.actions
export const editReducers = adminEdit.reducer