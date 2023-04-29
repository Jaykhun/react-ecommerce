import { createSlice } from '@reduxjs/toolkit'

interface MenuStateType {
    isCatalogMenuOpen: boolean
    isSearchModalOpen: boolean
}

const initialState: MenuStateType = {
    isCatalogMenuOpen: false,
    isSearchModalOpen: false,
}

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        handleCatalogMenu(state) {
            state.isCatalogMenuOpen = !state.isCatalogMenuOpen
        },

        handleSearchModal(state){
            state.isSearchModalOpen = ! state.isSearchModalOpen
        }
    }
})