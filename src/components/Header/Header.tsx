import "./Header.scss"
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {UserMenu} from "../UserMenu";
import {getCookie} from "../../helpers/getCookie";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const {onSignInClick} = useActions()
    const {token} = useTypedSelector(state => state.token)
    const cookie = getCookie('token')

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

                    {cookie?
                        <UserMenu/>
                        : <div className="header__register register">
                            <div className="register__login" onClick={() => onSignInClick()}>Войти</div>
                            <Link to="/register" className="register__register">Регистрация</Link>
                        </div>
                    }
                </section>
            </div>
        </header>
    );
};

export default Header;