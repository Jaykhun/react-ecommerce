import { FetchProduct } from '@/models/productTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserCartStateType {
    products: FetchProduct[],
}

const initialState: UserCartStateType = {
    products: [],
}
export const productsSlice = createSlice({
    name: 'fetchedProducts',
    initialState,
    reducers: {
        getAllProducts(state, actions: PayloadAction<FetchProduct[]>) {
            state.products = [...state.products, ...actions.payload]
        }
    }
})