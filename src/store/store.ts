import {configureStore} from '@reduxjs/toolkit'
import {popupReducer} from "./features/popupSlice";
import {menuReducer} from "./features/menuSlice";
import {productApi} from "./product/productApi";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        menu: menuReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)

export type TypedRootState = ReturnType<typeof store.getState>

