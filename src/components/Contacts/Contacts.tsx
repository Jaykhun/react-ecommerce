import { useServiceActions } from '@/hooks/useServiceActions'
import './Contacts.scss'

const Contacts = () => {
    const { openContactsModal } = useServiceActions()

    const handleOpen = () => openContactsModal()

    return (
        <div className="contacts__body">
            <div className="contacts__phone">
                <p className="contacts__text">Ташкент</p>
                <a className="contacts__number" href="tel:998901711717">+998 90 171 17 17</a>
                <p className="contacts__workday">Пн-Вс: 8:00 - 20:00</p>
                <div className="contacts__arrow" onClick={handleOpen}></div>
            </div>
            <div className="contacts__recall">
                Обратный звонок
            </div>
        </div>
    )
}

export default Contacts