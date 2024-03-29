import { contactsSlice } from '@/service/contactsSlice'
import { menuSlice } from '@/service/menuSlice'
import { productsSlice } from '@/service/productsSlice'
import { userCart } from '@/service/userCart'
import { userState } from '@/service/userService'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const allActions = {
    ...menuSlice.actions,
    ...contactsSlice.actions,
    ...userCart.actions,
    ...userState.actions,
    ...productsSlice.actions,
}

export const useServiceActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}