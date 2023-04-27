import { Contacts } from '@/components/Contacts'
import { Link } from 'react-router-dom'

const MainTop = () => {
    return (
        <section className="main-top">
            <div className="main-top__header">
                <Link to="/" className="main-top__title">Название компании</Link>
                <span className="main-top__subtitle">Магазин универсальных товаров</span>
            </div>

            <div className="main-top__contacts">
                <Contacts />
            </div>
        </section>
    )
}

export default MainTop