import UserMenu from '@/components/UserMenu'
import { getToken } from '@/helpers/getToken'
import { WebStoragePath } from '@/models/userServiceType'
import { Link } from "react-router-dom"
import './Header.scss'

const Header = () => {
    const cookie = getToken(WebStoragePath.token)

    return (
        <header className="header">
            <div className="container">
                <section className="header__body">
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/" className="menu__link">Главная</Link>
                            </li>
                        </ul>
                    </nav>

                    {cookie
                        ? <UserMenu />
                        : <div className="header__register register">
                            <Link to="/login" className="register__login">Войти</Link>
                            <Link to="/registration" className="register__register">Регистрация</Link>
                        </div>
                    }
                </section>
            </div>
        </header>
    )
}

export default Header