import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import './Modal.scss'

interface ModalProps {
    isOpen: boolean,
    handleClose(): void,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className='modal' onClick={handleClose}>
            <div className="modal__body">
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__close" onClick={handleClose}></div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal