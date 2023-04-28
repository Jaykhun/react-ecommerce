import { Contacts } from '@/components/Contacts'
import { Link } from 'react-router-dom'
import './Main.scss'
import { MainBody } from './index'

const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <section className="main-top">
                    <div className="main-top__header">
                        <Link to="/" className="main-top__title">Название компании</Link>
                        <span className="main-top__subtitle">Магазин универсальных товаров</span>
                    </div>

                    <div className="main-top__contacts">
                        <Contacts />
                    </div>
                </section>
                <MainBody />
            </div>
        </main>
    )
}

export default Main