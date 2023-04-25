import { createSlice } from '@reduxjs/toolkit'

interface MenuStateType {
    isCatalogMenuOpen: boolean
}

const initialState: MenuStateType = {
    isCatalogMenuOpen: false,
}

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        openCatalogMenu(state) {
            state.isCatalogMenuOpen = !state.isCatalogMenuOpen
        }
    }
})