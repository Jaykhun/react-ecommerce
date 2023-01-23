import {FC, ReactNode} from 'react';
import Portal from "./Portal";
import {CSSTransition} from "react-transition-group";

interface popupPropsType {
    isOpen: boolean,
    onClose: any,
    children: ReactNode
}

const Popup: FC<popupPropsType> = ({isOpen, onClose, children}) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={200}
            classNames="popup"
            unmountOnExit
        >
            <Portal popupOpen={isOpen}>
                <div className={`popup ${isOpen ? "popup-active" : ''}`} onClick={onClose}>
                    <div className="popup__body">
                        <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                            <div className="popup__close" onClick={onClose}></div>
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        </CSSTransition>
    )
};

export default Popup;