import Popup from "../UI/Popup/Popup";
import "./SearchPopup.scss"
import "../UI/Popup/Popup.scss";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const SearchPopup = () => {
    const {onSearchClick} = useActions()
    const {isSearchModuleOpen} = useTypedSelector(state => state.popup)

    return (
        <Popup isOpen={isSearchModuleOpen} onClose={onSearchClick}>
            <div className="search-popup">
                <div className="search-popup__inner">
                    <div className="search-popup__header">
                        <div className="search-form mobile-search-popup-title r-active-btn mobile-search-btn">
                            поиск
                        </div>
                        <p className="search-popup__title">поиск по параметрам <span></span></p>
                        <p className="search-popup__title mobile-search-popup-title options">параметры</p>
                    </div>

                    <div className="search-popup__row">
                        <form action="src/components/SearchPopup/SearchPopup#" className="search-popup__search popup-form">
                            <input type="text" placeholder="Я ищу…"/>
                        </form>
                        <form action="src/components/SearchPopup/SearchPopup#" className="search-popup__form search-form popup-form">
                            <div className="search-form__price search-price">
                                <div className="search-price__currency">
                                    <label className="input-text">Цена
                                        ($):</label>
                                </div>
                                <div className="search-price__input">
                                    <input type="number" className="input-style" placeholder="100" min="1"
                                           max="1000000"/>
                                    <input type="number" className="input-style" placeholder="1000000" min="1"
                                           max="1000000"/>
                                </div>
                            </div>

                            <div className="search-form__name">
                                <label htmlFor="searchName" className="input-text">Название:</label>
                                <input type="text" className="input-style" id="searchName"/>
                            </div>

                            <div className="search-form__text">
                                <label htmlFor="searchText" className="input-text">Текст:</label>
                                <input type="text" className="input-style" id="searchText"/>
                            </div>

                            <div className="search-form__category">
                                <label htmlFor="searchText" className="input-text">Выберите категорию:</label>
                                <select name="" id="" className="input-style">
                                    <option value="">All</option>
                                    <option value="">T-shirt</option>
                                </select>
                            </div>

                            <button type="button"
                                    className="search-form__submit btn w-opacity w-bg-r-btn">Найти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default SearchPopup;