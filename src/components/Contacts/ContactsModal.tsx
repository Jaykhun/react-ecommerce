import { Modal } from '@/components/UI'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const ContactsModal = () => {
    const { closeContactsModal } = useServiceActions()
    const { isContactsModalOpen } = useTypedSelector(state => state.contactsSlice)

    const modalState = {
        isLoading: false
    }

    return (
        <Modal isOpen={isContactsModalOpen} state={modalState} handleClose={closeContactsModal}>
            <div className='contacts-modal'>
                <div className="contacts-modal__body">
                    <div className="contacts-modal__content">
                        <div className="contacts-modal__item">
                            <p className="contacts-modal__text">г.Ташкент</p>
                            <a href='tel:998901711717' className="contacts-modal__number">+998 90 171 17 17</a>
                        </div>

                        <div className="contacts-modal__item">
                            <p className="contacts-modal__text">г.Нукус</p>
                            <a href='tel:998912222121' className="contacts-modal__number">+998 91 222 21 21</a>
                        </div>

                        <div className="contacts-modal__messenger modal-messenger">
                            <div className="modal-messenger__title">Написать в Telegram</div>
                            <div className="modal-messenger__icon">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.332277 8.37276C2.58294 7.14806 5.09529 6.12585 7.4427 5.09845C11.4812 3.41565 15.5357 1.76201 19.6311 0.222495C20.4279 -0.0398077 21.8596 -0.296293 22 0.870224C21.9231 2.52149 21.6069 4.16308 21.39 5.80467C20.8395 9.41468 20.2031 13.0123 19.5826 16.6105C19.3688 17.809 17.8491 18.4294 16.8766 17.6624C14.5396 16.103 12.1847 14.5587 9.87754 12.963C9.12178 12.2044 9.82261 11.1149 10.4976 10.5731C12.4224 8.69919 14.4637 7.10705 16.2879 5.13626C16.78 3.96238 15.326 4.95168 14.8464 5.25484C12.2114 7.04875 9.64078 8.95219 6.86258 10.5288C5.44348 11.3005 3.78949 10.641 2.37103 10.2104C1.09923 9.6902 -0.764466 9.16608 0.332148 8.37291L0.332277 8.37276Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default ContactsModal