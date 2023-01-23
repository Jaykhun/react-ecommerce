import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Sidebar = () => {
    const {onAdminMenuClick} = useActions()
    const {isAdminMenuOpen} = useTypedSelector(state => state.admin)
    return (
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
                            <NavLink to="/admin/orders" className={({isActive}) =>
                                isActive ? "active-item" : undefined}>
                                <span className="icon-order icon"></span>
                                <span>Заказы</span>
                            </NavLink>
                        </li>
                        <li className="sidebar__item">
                            <NavLink to="/admin/users" className={({isActive}) =>
                                isActive ? "active-item" : undefined}>
                                <span className="icon-users icon"></span>
                                <span>Пользователи</span>
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
    );
};

export default Sidebar;