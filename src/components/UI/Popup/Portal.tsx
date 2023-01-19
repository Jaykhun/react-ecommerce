import {FC, ReactNode} from 'react';
import {createPortal} from "react-dom";

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