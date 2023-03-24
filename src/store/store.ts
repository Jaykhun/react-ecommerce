import { configureStore } from '@reduxjs/toolkit'
import userApi from '@/store/api/user'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
        .concat(
            userApi.middleware
        )
})