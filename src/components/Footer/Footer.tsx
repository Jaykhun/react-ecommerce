import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__info info">
                    <div className="footer__name">
                        <p className="info__name">Название компании</p>
                        <span className="info__copyright"> &#169; 2022 - 2023</span>
                    </div>

                    <div className="footer__contacts">
                        <div className="info__contacts">
                            <a href="tel:+998901711771" className="info__call">+998 90 171 17 17</a>
                            <a href="tel:+998912222121" className="info__call">+998 91 222 21 21</a>
                        </div>

                        <div className="info__workday">
                            Пн-Вс: 8:00 - 20:00
                        </div>
                    </div>

                    <div className="footer__location">
                        Ленинский проспект, дом 3
                    </div>

                    <div className="footer__email">
                        <a href="mailto:dosibaevjaykhun@gmail.com">dosibaevjaykhun@gmail.com</a>
                    </div>
                </div>

                <nav className="footer__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="src/components/Footer/Footer#">Возврат и обмен</a></li>
                        <li className="menu__item"><a href="src/components/Footer/Footer#">Корпоративным клиентам</a></li>
                        <li className="menu__item"><a href="src/components/Footer/Footer#">Связаться с нами</a></li>
                        <li className="menu__item"><a href="src/components/Footer/Footer#">Контакты</a></li>
                    </ul>

                    <div className="footer__logo">Logo</div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;