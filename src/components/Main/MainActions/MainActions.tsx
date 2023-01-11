import {Link} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import "./MainActions.scss";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const MainActions = () => {
    const {onSearchClick, onPhoneClick, onMenuClick, onCatalogMenuClick} = useActions()
    const {isCatalogMenuOpen} = useTypedSelector(state => state.menu)

    return (
        <section className="main-actions">
            <div className="mobile-menu__icon" onClick={() => onMenuClick()}></div>
            <div className="mobile-contact__icon" onClick={() => onPhoneClick()}></div>
            <div className={`main-actions__catalog catalog w-bg-r-btn btn w-opacity ${isCatalogMenuOpen ? "catalog-active" : ""}`} onClick={() => onCatalogMenuClick()}>
                <div className="catalog__title">Каталог товаров</div>
                <div className="catalog__icon"></div>
            </div>

            <div className="main-actions__search search">
                <form action="#" className="search__form">
                    <input type="text" className="search__input" placeholder="Я ищу…"/>
                    <button type="button" className="search__btn"></button>
                    <button type="button" className="mobile-search__btn" onClick={() => onSearchClick()}></button>
                </form>

                <div className="search__popup r-opacity" onClick={() => onSearchClick()}>
                    <button className="btn w-btn">Подбор по параметрам</button>
                </div>
            </div>

            <div className="main-actions__buy">
                <Link to="/cart" className="main-actions__cart w-opacity btn">
                    <button className="cart__btn"></button>
                    <span className="cart__amount">2</span>
                </Link>
            </div>
        </section>
    );
};

export default MainActions;