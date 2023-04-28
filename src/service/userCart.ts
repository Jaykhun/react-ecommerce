import { CartProduct } from '@/models/userServiceType'
import { calculateDiscount } from '@/utils/calculateDiscount'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserCartStateType {
    products: CartProduct[],
    totalPrice: number
}

const initialState: UserCartStateType = {
    products: [],
    totalPrice: 0
}

export const userCart = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        addProduct(state, actions: PayloadAction<CartProduct>) {
            state.products = [...state.products, actions.payload]
        },

        deleteProduct(state, actions: PayloadAction<number>) {
            state.products = state.products.filter(product => product.id !== actions.payload)
        },

        clearProduct: () => initialState,

        increaseProduct(state, actions: PayloadAction<number>) {
            state.products = state.products.map(product => ({
                ...product,
                count: product.id === actions.payload
                    ? product.count + 1
                    : product.count
            }))
        },

        decreaseProduct(state, actions: PayloadAction<number>) {
            state.products = state.products.map(product => ({
                ...product,
                count: product.id === actions.payload && product.count > 1
                    ? product.count - 1
                    : product.count
            }))
        },

        counTotalPrice(state) {
            console.log(1)

            state.totalPrice = state.products.reduce((counter, { count, price, discount }) =>
                count * discount > 0 ? calculateDiscount(price, discount) : price + counter, 0)
        }
    }
})