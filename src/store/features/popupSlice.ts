import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";

interface popupTypes {
    isSearchModuleOpen: boolean,
    isPhoneModuleOpen: boolean,
    isSignInModuleOpen: boolean,
    isCallBackOpen: boolean
}

const initialState: popupTypes = {
    isSearchModuleOpen: false,
    isPhoneModuleOpen: false,
    isSignInModuleOpen: false,
    isCallBackOpen: false
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
        },

        onCallBackClick: (state) => {
            state.isCallBackOpen = !state.isCallBackOpen
        }
    }
})

export const popupActions = popupSlice.actions
export const popupReducer = popupSlice.reducer