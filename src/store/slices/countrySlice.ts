import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CountryStateType {
    isOpenAddModal: boolean
    isOpenEditModal: boolean,
    countryId: number
}

const initialState: CountryStateType = {
    isOpenAddModal: false,
    isOpenEditModal: false,
    countryId: 0
}

export const countrySlice = createSlice({
    name: 'countrySlice',
    initialState,
    reducers: {
        openCountryAddModal(state) {
            state.isOpenAddModal = true
        },
        closeCountryAddModal(state) {
            state.isOpenAddModal = false
        },

        openCountryEditModal(state, action: PayloadAction<number>) {
            state.isOpenEditModal = true
            state.countryId = action.payload
        },
        closeCountryEditModal(state) {
            state.isOpenEditModal = false
        }
    }
}) 