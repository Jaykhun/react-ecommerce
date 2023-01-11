import {FC, ReactNode} from 'react';
import {createPortal} from "react-dom";
import "./Popup/Popup.scss"
import "./SearchPopup/SearchPopup.scss"

interface PortalPropsType {
    popupOpen: boolean,
    children: ReactNode
}

const Portal: FC<PortalPropsType> = ({popupOpen, children}) => {
    if (!popupOpen) return null;

    return createPortal(
        <>
            {children}
        </>, document.body
    );
};

export default Portal;