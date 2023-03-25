import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { userReducer } from '@/store/reducers/userReducer'

const allActions = {
    ...userReducer.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}