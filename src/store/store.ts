import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {productApi} from "./product/productApi";
import {categoryApi} from "./category/categoryApi";
import {userApi} from "./user/userApi";
import {productReducer} from "./reducers/productSlice";
import {countryApi} from "./country/countryApi";
import {popupReducer} from "./features/popupSlice";
import {menuReducer} from "./features/menuSlice";
import {adminReducer} from "./reducers/adminSlice";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        menu: menuReducer,
        admin: adminReducer,
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
        .concat(
            productApi.middleware,
            categoryApi.middleware,
            userApi.middleware,
            countryApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedRootState = ReturnType<typeof store.getState>

