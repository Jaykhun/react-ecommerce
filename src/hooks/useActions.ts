import { attributeSlice } from '@/store/slices/attributeSlice'
import { categorySlice } from '@/store/slices/categorySlice'
import { countrySlice } from '@/store/slices/countrySlice'
import { orderSlice } from '@/store/slices/orderSlice'
import { orderStatusSlice } from '@/store/slices/orderStatusSlice'
import { productSlice } from '@/store/slices/productSlice'
import { userSlice } from '@/store/slices/userSlice'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const allActions = {
    ...userSlice.actions,
    ...countrySlice.actions,
    ...productSlice.actions,
    ...categorySlice.actions,
    ...orderSlice.actions,
    ...orderStatusSlice.actions,
    ...attributeSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}