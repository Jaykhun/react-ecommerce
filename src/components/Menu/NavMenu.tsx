import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const NavMenu = () => {
    const {onMenuClick, onNavMenuClick} = useActions()
    const {isNavMenuOpen} = useTypedSelector(state => state.menu)

    return (
        <div className="mobile-menu__top">
            <div className="mobile-menu__menu" onClick={() => onNavMenuClick()}>Меню</div>
            <div className="mobile-menu__close" onClick={() => onMenuClick()}></div>

            <div className={`menu-next ${isNavMenuOpen ? "menu-active" : ""}`}>
                <div className="menu-next__header" onClick={() => onNavMenuClick()}>
                    <div className="menu-next__close">Назад</div>
                </div>

                <ul className="menu-next__menu" onClick={(e) => e.stopPropagation()}>
                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">Главная</a>
                    </li>

                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">О нас</a>
                        <ul>
                            <li className="">
                                <a href="#" className="menu-next__link">Отзывы о нас</a>
                            </li>

                            <li className="">
                                <a href="#" className="menu-next__link">Вопросы и ответы</a>
                            </li>

                            <li className="">
                                <a href="#" className="menu-next__link">Статьи</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">Информация</a>
                        <ul>
                            <li className="">
                                <a href="#" className="menu-next__link">Оплата</a>
                            </li>

                            <li className="">
                                <a href="#" className="menu-next__link">Доставка</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">Акции</a>
                    </li>

                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">Новости</a>
                    </li>

                    <li className="menu-next__item">
                        <a href="#" className="menu-next__link top-link">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;