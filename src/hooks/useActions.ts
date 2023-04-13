import { countrySlice } from '@/store/slices/countrySlice'
import { productSlice } from '@/store/slices/productSlice'
import { userSlice } from '@/store/slices/userSlice'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const allActions = {
    ...userSlice.actions,
    ...countrySlice.actions,
    ...productSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}