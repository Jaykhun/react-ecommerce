import { Link } from "react-router-dom"
import './Header.scss'

const Header = () => {
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
                </section>
            </div>
        </header>
  )
}

export default Header