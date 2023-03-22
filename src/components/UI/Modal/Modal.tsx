import './Modal.scss'

const Modal = () => {
    return (
        <div className={`modal `}>
            <div className="modal__body">
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__close"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal