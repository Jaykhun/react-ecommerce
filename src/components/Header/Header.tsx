import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";

const Header = () => {
    const {onSignInClick} = useActions()

    return (
        <header className="header">
            <div className="container">
                <section className="header__body">
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/" className="menu__link">Главная</Link>
                            </li>

                            <li className="menu__item has-child">
                                <a className="menu__link" href="src/components/Header/Header#">О нас</a>
                                <ul className="menu__hovered">
                                    <li><a href="src/components/Header/Header">Отзывы о нас</a></li>
                                    <li><a href="src/components/Header/Header">Вопросы и ответы</a></li>
                                    <li><a href="src/components/Header/Header">Статьи</a></li>
                                </ul>
                            </li>

                            <li className="menu__item has-child">
                                <a className="menu__link" href="src/components/Header/Header#">Информация</a>
                                <ul className="menu__hovered">
                                    <li><a href="src/components/Header/Header">Оплата</a></li>
                                    <li><a href="src/components/Header/Header">Доставка</a></li>
                                </ul>
                            </li>

                            <li className="menu__item">
                                <a className="menu__link" href="src/components/Header/Header#">Акции</a>
                            </li>

                            <li className="menu__item">
                                <a className="menu__link" href="src/components/Header/Header#">Новости</a>
                            </li>

                            <li className="menu__item">
                                <a className="menu__link" href="src/components/Header/Header#">Контакты</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__register register">
                        <div className="register__login" onClick={() => onSignInClick()}>Войти</div>
                        <Link to="/register" className="register__register">Регистрация</Link>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;