import { createSlice } from "@reduxjs/toolkit"

interface menuTypes {
    isMenuOpen: boolean,
    isNavMenuOpen: boolean,
    isSubMenuOpen: boolean,
    isCatalogMenuOpen: boolean
}

const initialState: menuTypes = {
    isMenuOpen: false,
    isNavMenuOpen: false,
    isSubMenuOpen: false,
    isCatalogMenuOpen: false
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

        onNavMenuClick: (state) => {
            state.isNavMenuOpen = !state.isNavMenuOpen
        },

        onSubMenuClick: (state) => {
            state.isSubMenuOpen = !state.isSubMenuOpen
        },

        onCatalogMenuClick: (state) => {
            state.isCatalogMenuOpen = !state.isCatalogMenuOpen
        }
    }
})

export const menuActions = menuSlice.actions
export const menuReducer = menuSlice.reducer
