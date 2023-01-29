import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface productSliceTypes {
    productCount: number
}

const initialState: productSliceTypes = {
    productCount: 1
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        onIncrease: (state, action: PayloadAction<number>) => {
            state.productCount = action.payload + 1
        },
        onDecrease: (state, action: PayloadAction<number>) => {
            state.productCount = action.payload - 1
        }
    }
})

export const productActions = productSlice.actions
export const productReducer = productSlice.reducer