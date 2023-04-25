import { createSlice } from '@reduxjs/toolkit'

interface ContactsStateType {
    isContactsModalOpen: boolean
    isCallBackModalOpen: boolean
}

const initialState: ContactsStateType = {
    isContactsModalOpen: false,
    isCallBackModalOpen: false
}

export const contactsSlice = createSlice({
    name: 'contactsSlice',
    initialState,
    reducers: {
        openContactsModal(state) {
            state.isContactsModalOpen = true
        },
        closeContactsModal(state) {
            state.isContactsModalOpen = false
        },

        openCallBackModal(state) {
            state.isCallBackModalOpen = true
        },
        closeCallBackModal(state) {
            state.isCallBackModalOpen = false
        },
    }
})