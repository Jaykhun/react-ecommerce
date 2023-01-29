import {configureStore} from '@reduxjs/toolkit'
import {popupReducer} from "./features/popupSlice";
import {menuReducer} from "./features/menuSlice";
import {productApi} from "./product/productApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {categoryApi} from "./category/category";
import {adminReducer} from "./reducers/adminSlice";
import {userApi} from "./user/userApi";
import {productReducer} from "./reducers/productSlice";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        menu: menuReducer,
        admin: adminReducer,
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
        .concat(
            productApi.middleware,
            categoryApi.middleware,
            userApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedRootState = ReturnType<typeof store.getState>

