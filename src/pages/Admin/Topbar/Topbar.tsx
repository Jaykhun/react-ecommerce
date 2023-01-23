import React from 'react';
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Topbar = () => {
    const {onAdminMenuClick} = useActions()
    const {isAdminMenuOpen} = useTypedSelector(state => state.admin)

    return (
        <header className="header">
            <div className={`header__navbar navbar ${isAdminMenuOpen ? "" : "active-navbar"}`}>
                <div className="navbar__menu">
                    <div className="navbar__form">
                        <div className="navbar__burger" onClick={() => onAdminMenuClick()}><span
                            className="icon-menu-bar"></span></div>
                        <form className="navbar__search">
                            <input type="search" name="" id="" placeholder="Я ищу…"/>
                        </form>
                    </div>

                    <div className="navbar__info">
                        <div className="navbar__user">
                            <img src="../../assets/user.png" alt="user-photo"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;