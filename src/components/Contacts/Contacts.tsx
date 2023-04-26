import { useServiceActions } from '@/hooks/useServiceActions'
import './Contacts.scss'

const Contacts = () => {
    const { openContactsModal, openCallBackModal } = useServiceActions()

    const onContactsClick = () => openContactsModal()
    const onCallBackClick = () => openCallBackModal()

    return (
        <div className="contacts__body">
            <div className="contacts__phone">
                <p className="contacts__text">Ташкент</p>
                <a className="contacts__number" href="tel:998901711717">+998 90 171 17 17</a>
                <p className="contacts__workday">Пн-Вс: 8:00 - 20:00</p>
                <div className="contacts__arrow" onClick={onContactsClick}></div>
            </div>

            <div className="contacts__recall" onClick={onCallBackClick}>
                Обратный звонок
            </div>
        </div>
    )
}

export default Contacts