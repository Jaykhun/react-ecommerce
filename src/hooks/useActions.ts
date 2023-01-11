import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {popupActions} from "../store/features/popupSlice";
import {menuActions} from "../store/features/menuSlice";

const allActions = {
    ...popupActions,
    ...menuActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}