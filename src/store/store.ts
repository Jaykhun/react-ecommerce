import userApi from '@/store/api/user'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { countryAPi } from './api/country/countryApi'
import { userReducer } from './reducers/userReducer'

export const store = configureStore({
    reducer: {
        userReducer: userReducer.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [countryAPi.reducerPath]: countryAPi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware,
            countryAPi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>