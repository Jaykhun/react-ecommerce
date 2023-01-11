import {createSlice} from "@reduxjs/toolkit";

interface menuTypes {
    isMenuOpen: boolean,
    isNavMenuOpen: boolean,
    isSubMenuOpen: boolean,
    isCatalogMenuOpen: boolean,
    isAdminMenuOpen: boolean
}

const initialState: menuTypes = {
    isMenuOpen: false,
    isNavMenuOpen: false,
    isSubMenuOpen: false,
    isCatalogMenuOpen: false,
    isAdminMenuOpen: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        onMenuClick: (state) => {
            state.isMenuOpen = !state.isMenuOpen
            state.isNavMenuOpen = false
            state.isSubMenuOpen = false
        },

        onNavMenuClick: (state) =>{
            state.isNavMenuOpen = ! state.isNavMenuOpen
        },

        onSubMenuClick: (state) =>{
            state.isSubMenuOpen = ! state.isSubMenuOpen
        },

        onCatalogMenuClick: (state) =>{
            state.isCatalogMenuOpen = ! state.isCatalogMenuOpen
        },

        onAdminMenuClick: (state) =>{
            state.isAdminMenuOpen = ! state.isAdminMenuOpen
        }
    }
})

export const menuActions = menuSlice.actions
export const menuReducer = menuSlice.reducer
