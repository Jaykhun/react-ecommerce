import { contactsSlice } from '@/service/contactsSlice'
import { menuSlice } from '@/service/menuSlice'
import { productsSlice } from '@/service/productsSlice'
import { userCart } from '@/service/userCart'
import { userState } from '@/service/userService'
import { productSlice } from '@/store/slices/productSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import callApi from './api/call'
import categoryApi from './api/category'
import countryApi from './api/country'
import { orderApi } from './api/order'
import productApi from './api/product'
import userApi from './api/user'
import { attributeSlice } from './slices/attributeSlice'
import { categorySlice } from './slices/categorySlice'
import { countrySlice } from './slices/countrySlice'
import { orderSlice } from './slices/orderSlice'
import { orderStatusSlice } from './slices/orderStatusSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        countrySlice: countrySlice.reducer,
        productSlice: productSlice.reducer,
        categorySlice: categorySlice.reducer,
        orderSlice: orderSlice.reducer,
        orderStatusSlice: orderStatusSlice.reducer,
        attributeSlice: attributeSlice.reducer,
        menuSlice: menuSlice.reducer,
        contactsSlice: contactsSlice.reducer,
        userCart: userCart.reducer,
        userState: userState.reducer,
        productsSlice: productsSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [callApi.reducerPath]: callApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware,
            productApi.middleware,
            countryApi.middleware,
            categoryApi.middleware,
            callApi.middleware,
            orderApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>