import { FC, ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Modal.scss'

interface ModalProps {
    isOpen: boolean,
    handleClose(): void,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    const nodeRef = useRef(null)

    return (
        <CSSTransition
            in={isOpen}
            nodeRef={nodeRef}
            timeout={300}
            classNames="modal"
            unmountOnExit
            onEnter={() => !isOpen}
            onExited={() => isOpen}
        >
            <div className='modal' onClick={handleClose} ref={nodeRef}>
                <div className="modal__body">
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal__close" onClick={handleClose}></div>
                        {children}
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal