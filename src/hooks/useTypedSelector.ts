import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypedRootState} from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<TypedRootState> = useSelector