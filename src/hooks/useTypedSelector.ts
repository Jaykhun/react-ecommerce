import { TypedUseSelectorHook, useSelector } from "react-redux"
import { TypedStoreState } from "../store/store"

export const useTypedSelector: TypedUseSelectorHook<TypedStoreState> = useSelector