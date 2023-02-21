import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import NavMenu from "./NavMenu";
import "./MobileMenu.scss"
import {useGetAllCategoriesQuery} from "../../store/category/categoryApi";
import React from "react";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
    const {onMenuClick, onSignInClick} = useActions()
    const {isMenuOpen} = useTypedSelector(state => state.menu)
    const {data: categories} = useGetAllCategoriesQuery()

    return (
        <div className={`mobile-menu ${isMenuOpen ? "menu-active" : ""}`} onClick={() => onMenuClick()}>
            <div className={`mobile-menu__content ${isMenuOpen ? "menu-active" : ''}`}
                 onClick={(e) => e.stopPropagation()}>
                <div className="mobile-menu__inner">
                    <div className="mobile-menu__header">
                        <NavMenu/>
                        <div className="mobile-menu__form form">
                            <span className="form__singin" onClick={() => onSignInClick()}>Войти</span>
                            <Link to="register" className="form__register"
                                  onClick={() => onMenuClick()}>Регистрация</Link>
                        </div>
                    </div>

                    <div className="mobile-menu__body">
                        <ul className="mobile-menu__list">
                            {categories?.map(category =>
                                <MobileMenuItem category={category} key={category.id}/>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;