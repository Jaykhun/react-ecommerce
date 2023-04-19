import { Link, NavLink } from 'react-router-dom'
import './SideBar.scss'

interface pageListType {
    name: string,
    icon: string,
    path: string
}

const SideBar = () => {
    const pageList: pageListType[] = [
        { name: 'Главная панель', icon: 'icon-dashboard', path: '/admin' },
        { name: 'Пользователи', icon: 'icon-user', path: 'users' },
        { name: 'Продукты', icon: 'icon-product', path: 'products' },
        { name: 'Страны', icon: 'icon-country', path: 'countries' },
        { name: 'Категории', icon: 'icon-category', path: 'categories' },
        { name: 'Заказы', icon: 'icon-orders', path: 'orders' },
        { name: 'Статус', icon: 'icon-check', path: 'status' },
        { name: 'Звонки', icon: 'icon-phone', path: 'calls' },
    ]

    return (
        <div className='sidebar'>
            <Link to='/' className="sidebar__logo">Название компании</Link>
            <nav className="sidebar__nav">
                <ul className="sidebar__menu menu-sidebar">
                    {pageList.map(page =>
                        <li className='menu-sidebar__item' key={page.name}>
                            <NavLink to={page.path} end className={({ isActive }) => (isActive ? 'active' : '')}>
                                <span className='menu-sidebar__name'>{page.name}</span>
                                <span className={`menu-sidebar__icon ${page.icon}`}></span>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar