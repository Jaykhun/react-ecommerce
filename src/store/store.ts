import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { callApi, categoryApi, countryApi, productApi, userApi } from './api'
import { categorySlice } from './slices/categorySlice'
import { countrySlice } from './slices/countrySlice'
import { productSlice } from './slices/productSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        countrySlice: countrySlice.reducer,
        productSlice: productSlice.reducer,
        categorySlice: categorySlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [callApi.reducerPath]: callApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware,
            productApi.middleware,
            countryApi.middleware,
            categoryApi.middleware,
            callApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>