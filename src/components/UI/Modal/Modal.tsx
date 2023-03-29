import clsx from 'clsx'
import { FC, ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Loader from '../Loader'
import Message from '../Message'
import './Modal.scss'

interface ModalProps {
    isLoading: boolean,
    isError?: boolean,
    error?: any
    isOpen: boolean,
    handleClose(): void,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children, isLoading, isError, error }) => {
    const nodeRef = useRef(null)

    isOpen
        ? document.body.classList.add('modal-open')
        : document.body.classList.remove('modal-open')

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
                    <div className={clsx('modal__content', { 'loading': isLoading || isError })} onClick={(e) => e.stopPropagation()}>
                        <div className="modal__close" onClick={handleClose}></div>
                        {isLoading
                            ? <Loader isLoading={isLoading} />
                            : isError
                                ? <Message error={error} />
                                : children
                        }
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal