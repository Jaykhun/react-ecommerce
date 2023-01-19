import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import ProductsEdit from "../pages/Admin/Products/ProductsEdit";

const Dashboard = () => {
    const {onAdminMenuClick} = useActions()
    const {isAdminMenuOpen} = useTypedSelector(state => state.admin)

    return (
        <div className="wrapper">
            <div className="admin">
                <div className={`content ${isAdminMenuOpen ? "" : "active-content"}`}>
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
                    <main className="main">
                        <Outlet/>
                    </main>
                </div>
                <div className={`sidebar ${isAdminMenuOpen ? "" : "active-sidebar"}`}>
                    <div className="sidebar__inner">
                        <div className="sidebar__header">
                            <div className="sidebar__close" onClick={() => onAdminMenuClick()}></div>
                            <div className="sidebar__logo">
                                <Link to="/">Название компании</Link>
                            </div>

                            <div className="sidebar__user user">
                                <div className="user__img">
                                    <img src="../../assets/user.png" alt="user-photo"/>
                                </div>

                                <div className="user__name">Админ</div>
                            </div>
                        </div>

                        <nav className="sidebar__body">
                            <ul className="sidebar__menu">
                                <li className="sidebar__item">
                                    <NavLink to="/admin" end={true} className={({isActive}) =>
                                        isActive ? "active-item" : undefined}>
                                        <span className="icon-dashboard icon"></span>
                                        <span>Главная панель</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__item">
                                    <NavLink to="/admin/users" className={({isActive}) =>
                                        isActive ? "active-item" : undefined}>
                                        <span className="icon-users icon"></span>
                                        <span>Пользователей</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__item">
                                    <NavLink to="/admin/orders" className={({isActive}) =>
                                        isActive ? "active-item" : undefined}>
                                        <span className="icon-order icon"></span>
                                        <span>Заказы</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__item">
                                    <NavLink to="/admin/products" className={({isActive}) =>
                                        isActive ? "active-item" : undefined}>
                                        <span className="icon-product icon"></span>
                                        <span>Продукты</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <ProductsEdit/>
        </div>
    );
};

export default Dashboard;