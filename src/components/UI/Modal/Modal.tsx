import clsx from 'clsx'
import { FC, ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Loader from '../Loader'
import Message from '../Message'
import './Modal.scss'

interface ModalState {
    isLoading: boolean,
    isError?: boolean,
    error?: any
}

interface ModalProps {
    isOpen: boolean,
    state: ModalState,
    handleClose(): void,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children, state }) => {
    const { isLoading, isError, error } = state
    const nodeRef = useRef(null)

    isOpen
        ? document.body.classList.add('modal-active')
        : document.body.classList.remove('modal-active')

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