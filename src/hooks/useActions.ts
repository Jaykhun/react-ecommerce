import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {popupActions} from "../store/features/popupSlice";
import {menuActions} from "../store/features/menuSlice";
import {adminActions} from "../store/reducers/adminSlice";

const allActions = {
    ...popupActions,
    ...menuActions,
    ...adminActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}