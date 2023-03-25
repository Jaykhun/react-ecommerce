import { userReducer } from './reducers/userReducer'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import userApi from '@/store/api/user'

export const store = configureStore({
    reducer: {
        userReducer: userReducer.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware
        )
})

setupListeners(store.dispatch)

export type TypedStoreState = ReturnType<typeof store.getState>