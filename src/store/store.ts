import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {productApi} from "./api/product/productApi";
import {categoryApi} from "./api/category/categoryApi";
import {userApi} from "./api/user/userApi";
import {productReducer} from "./reducers/productSlice";
import {countryApi} from "./api/country/countryApi";
import {popupReducer} from "./features/popupSlice";
import {menuReducer} from "./features/menuSlice";
import {adminReducer} from "./reducers/adminSlice";
import {tokenReducer} from "./reducers/tokenSlice";
import {orderApi} from "./api/order/orderApi";
import {reviewApi} from "./api/review/reviewApi";
import {callBackApi} from "./api/callBack/callBack";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        menu: menuReducer,
        admin: adminReducer,
        product: productReducer,
        token: tokenReducer,
        [productApi.reducerPath]: productApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [callBackApi.reducerPath]: callBackApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
        .concat(
            productApi.middleware,
            reviewApi.middleware,
            categoryApi.middleware,
            userApi.middleware,
            countryApi.middleware,
            orderApi.middleware,
            callBackApi.middleware,
        )
})

setupListeners(store.dispatch)

export type TypedRootState = ReturnType<typeof store.getState>