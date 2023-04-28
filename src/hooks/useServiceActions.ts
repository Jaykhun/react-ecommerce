import { contactsSlice } from '@/service/contactsSlice'
import { menuSlice } from '@/service/menuSlice'
import { userCart } from '@/service/userCart'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const allActions = {
    ...menuSlice.actions,
    ...contactsSlice.actions,
    ...userCart.actions,
}

export const useServiceActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}