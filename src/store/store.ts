import userApi from '@/store/api/user'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { userSlice } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>