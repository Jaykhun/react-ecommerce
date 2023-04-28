import { FetchProduct } from '@/models/productTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserCartStateType {
    products: FetchProduct[]
}

const initialState: UserCartStateType = {
    products: [],
}

export const userCart = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        addProduct(state, actions: PayloadAction<FetchProduct>) {
            state.products = [...state.products, actions.payload]
        },

        removeProduct(state, actions: PayloadAction<number>) {
            state.products = state.products.filter(product => product.id !== actions.payload)
        }
    }
})