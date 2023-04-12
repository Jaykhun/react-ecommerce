import userApi from '@/store/api/user'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productApi from './api/product'
import { countrySlice } from './slices/countrySlice'
import { productSlice } from './slices/productSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        countrySlice: countrySlice.reducer,
        productSlice: productSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware,
            productApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>