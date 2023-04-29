import { CartProduct } from '@/models/userServiceType'
import { calcDiscount } from '@/utils/calcDiscount'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserCartStateType {
    products: CartProduct[],
    totalPrice: number,
    isCartModalOpen: boolean
}

const initialState: UserCartStateType = {
    products: [],
    totalPrice: 0,
    isCartModalOpen: false
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

        countTotalPrice(state) {
            state.totalPrice = state.products.reduce((counter, { count, price, discount }) => {
                const productPrice = discount > 0 ? calcDiscount(price, discount) : price
                return count * productPrice + counter
            }, 0)
        },

        openCartModal(state) {
            state.isCartModalOpen = true
        },

        closeCartModal(state) {
            state.isCartModalOpen = false
        }
    }
})