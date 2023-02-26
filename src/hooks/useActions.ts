import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {popupActions} from "../store/features/popupSlice";
import {menuActions} from "../store/features/menuSlice";
import {adminActions} from "../store/reducers/adminSlice";
import {productActions} from "../store/reducers/productSlice";
import {tokenActions} from "../store/reducers/tokenSlice";

const allActions = {
    ...popupActions,
    ...menuActions,
    ...adminActions,
    ...productActions,
    ...tokenActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}