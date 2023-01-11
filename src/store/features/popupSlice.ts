import {createSlice} from "@reduxjs/toolkit";

interface popupTypes {
    isSearchModuleOpen: boolean,
    isPhoneModuleOpen: boolean,
    isSignInModuleOpen: boolean
}

const initialState: popupTypes = {
    isSearchModuleOpen: false,
    isPhoneModuleOpen: false,
    isSignInModuleOpen: false
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        onSearchClick: (state) => {
            state.isSearchModuleOpen = !state.isSearchModuleOpen
        },

        onPhoneClick: (state) => {
            state.isPhoneModuleOpen = !state.isPhoneModuleOpen
        },

        onSignInClick: (state) => {
            state.isSignInModuleOpen = !state.isSignInModuleOpen
        }
    }
})

export const popupActions = popupSlice.actions
export const popupReducer = popupSlice.reducer