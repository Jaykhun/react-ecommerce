import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import NavMenu from "./NavMenu";
import "./MobileMenu.scss"

const MobileMenu = () => {
    const {onMenuClick, onSignInClick, onSubMenuClick} = useActions()
    const {isMenuOpen, isSubMenuOpen} = useTypedSelector(state => state.menu)

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
                            <li className={`mobile-menu__item item ${isSubMenuOpen ? "active-menu" : ""}`} onClick={() => onSubMenuClick()}>
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M28.2903 27.7679H5.70968C4.21935 27.7679 3 26.5079 3 24.9679H31C31 26.5079 29.7806 27.7679 28.2903 27.7679Z"
                                            stroke="#464646" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M5 25V8.75763C5 7.79093 5.8 7 6.77778 7H27.2222C28.2 7 29 7.79093 29 8.75763V25"
                                            stroke="#464646" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="square" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <span className="item__name">Компьютеры</span>
                                <span className="has-arrow"></span>

                                <ul className={`item__menu ${isSubMenuOpen ? "active-menu" : ""}`}>
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Компьютеры</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Компьютеры</a>
                                        </div>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Ноутбуки</a>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Планшеты</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="mobile-menu__item item">
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2256 29.0969H19.1288" stroke="#464646" stroke-width="1.4"
                                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path d="M24.9356 4.41931H10.4194V26.1935H24.9356V4.41931Z" stroke="#464646"
                                              stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path
                                            d="M25.4194 32H9.93548C8.87097 32 8 31.129 8 30.0645V3.93548C8 2.87097 8.87097 2 9.93548 2H25.4194C26.4839 2 27.3548 2.87097 27.3548 3.93548V30.0645C27.3548 31.129 26.4839 32 25.4194 32Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="square" stroke-linejoin="round"></path>
                                    </svg>
                            </span>

                                <span className="item__name">Телефоны</span>

                                <ul className="item__menu">
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Компьютеры</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Компьютеры</a>
                                            <span className="has-arrow"></span>
                                        </div>
                                        <ul className="sublevel__body">
                                            <li className="item__back">
                                                <span className="has-long-arrow"></span>
                                                Назад
                                            </li>

                                            <li className="item__title"><span>Компьютеры</span>

                                                <li className="item__link">
                                                    <a href="">Стационарные</a>
                                                </li>

                                                <li className="item__link">
                                                    <a href="">Неттопы</a>
                                                </li>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Ноутбуки</a>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Планшеты</a>
                                            <span className="has-arrow"></span>
                                        </div>

                                        <ul className="sublevel__body">
                                            <li className="item__back">
                                                <span className="has-long-arrow"></span>
                                                Назад
                                            </li>
                                            <li className="item__title"><span>Планшеты</span>

                                                <li className="item__link">
                                                    <a href="">Планшеты 2 в 1</a>
                                                </li>

                                                <li className="item__link">
                                                    <a href="">Планшеты с 3G
                                                        использованием</a>
                                                </li>

                                                <li className="item__link">
                                                    <a href="">Игровые планшеты</a>
                                                </li>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="mobile-menu__item item">
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.8878 19.3089C24.8878 14.9121 21.3614 11.3573 16.9998 11.3573C12.6261 11.3573 9.11182 14.9469 9.11182 19.3089C9.11182 23.7057 12.6382 27.2605 16.9998 27.2605C21.3614 27.2605 24.8878 23.7057 24.8878 19.3089Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M21.2224 22.3021C20.712 21.5069 20.4336 20.5714 20.4336 19.5424C20.4336 18.4198 20.8048 17.3908 21.3616 16.5489C20.4336 15.0521 18.8096 14.0698 16.9536 14.0698C14.0768 14.0698 11.7568 16.4085 11.7568 19.3085C11.7568 22.2085 14.0768 24.5472 16.9536 24.5472C18.7632 24.5472 20.2944 23.6585 21.2224 22.3021Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7.25586 7.58411H26.7439" stroke="#464646" stroke-width="1.4"
                                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path
                                            d="M26.7439 32H7.2559C6.2351 32 5.3999 31.1581 5.3999 30.129V4.40323C5.3999 3.60806 6.0031 3 6.7919 3H27.2079C27.9967 3 28.5999 3.60806 28.5999 4.40323V30.129C28.5999 31.1581 27.7647 32 26.7439 32Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <span className="item__name">Бытовая техника</span>
                                <span className="has-arrow"></span>

                                <ul className="item__menu">
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Бытовая техника</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Встраиваемая техника</a>
                                        </div>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Мелкая техника для кухни</a>
                                    </li>

                                    <li className="item__link">
                                        <a href=""> Телевизоры, Аудио-видео</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="mobile-menu__item item">
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.462 4.09414C12.6349 4.16919 12.7702 4.3108 12.8373 4.48692C13.0032 4.92203 13.3885 5.48954 13.9285 6.12455C15.7546 8.27188 19.096 8.27188 20.922 6.12455C21.462 5.48954 21.8474 4.92203 22.0132 4.48692C22.0804 4.3108 22.2157 4.16919 22.3886 4.09414C22.5615 4.01909 22.7573 4.01694 22.9318 4.08817L26.5406 5.56126C26.5414 5.56158 26.5422 5.56191 26.543 5.56224C27.2045 5.82738 27.7545 6.33302 28.1564 6.84942C28.1675 6.8637 28.1781 6.87842 28.188 6.89352L32.7345 13.7762C32.947 14.0978 32.8594 14.5308 32.5386 14.7445L27.9582 17.7962C27.6427 18.0064 27.2172 17.9273 26.9984 17.6177L25.7593 15.8645V29.9638C25.7593 30.3504 25.4459 30.6638 25.0593 30.6638H9.79124C9.40464 30.6638 9.09124 30.3504 9.09124 29.9638V15.8645L7.85213 17.6177C7.63333 17.9273 7.20785 18.0064 6.89237 17.7962L2.31195 14.7445C1.99112 14.5308 1.90351 14.0978 2.116 13.7762L6.66249 6.89352L6.66423 6.89088L6.66424 6.89089C7.03525 6.33471 7.6004 5.82263 8.31707 5.55834L11.9187 4.08817C12.0932 4.01694 12.2891 4.01909 12.462 4.09414ZM11.8427 5.63132L8.83434 6.85933C8.82592 6.86277 8.81743 6.86604 8.80888 6.86915C8.41282 7.01308 8.06703 7.31131 7.82969 7.66659C7.82942 7.667 7.82916 7.6674 7.82889 7.6678L3.66845 13.966L7.1019 16.2536L9.2196 13.2573C9.39561 13.0082 9.71257 12.9018 10.0032 12.9942C10.2938 13.0865 10.4912 13.3563 10.4912 13.6613V29.2638H24.3593V13.6613C24.3593 13.3563 24.5567 13.0865 24.8473 12.9942C25.138 12.9018 25.4549 13.0082 25.6309 13.2573L27.7486 16.2536L31.1821 13.966L27.0355 7.68878C26.7289 7.30025 26.3701 7.00081 26.0209 6.86124L26.0162 6.85935L26.0162 6.85933L23.0078 5.63132C22.736 6.1007 22.374 6.57827 21.9885 7.0315C19.6034 9.83623 15.2471 9.83623 12.862 7.0315C12.4766 6.57827 12.1145 6.1007 11.8427 5.63132Z"
                                              fill="#464646"></path>
                                    </svg>
                                </span>

                                <span className="item__name">Одежда</span>
                                <span className="has-arrow"></span>

                                <ul className="item__menu">
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Одежда</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Женщинам</a>
                                        </div>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Блузы и рубашки</a>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Платья и туники</a>
                                        </div>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Мальчикам</a>
                                        </div>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Девочкам</a>
                                        </div>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Футболки</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="mobile-menu__item item">
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5322 22.3228V7.11316" stroke="#464646" stroke-width="1.4"
                                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path
                                            d="M28.9999 26.9224C28.9999 26.9304 29.0001 26.9384 28.9999 26.9463M28.9999 26.9463C28.9895 27.2704 28.7693 27.5548 28.4434 27.6272L26.0322 28.2578C24.6967 28.5546 22.3596 28.9998 21.0241 28.9998H19.9483C19.058 28.9998 18.2048 28.8514 17.3516 28.5917L14.7919 27.7385C14.3838 27.5901 13.9387 27.5159 13.4935 27.5159H12.6774V28.9998H9.00482C8.00322 28.9998 6.96451 28.8885 6 28.6288V26.0321L6.41071 25.3035C5.58929 22.0178 7.0758 19.3548 7.0758 19.3548C7.1129 19.0951 7.1129 18.8725 7.0758 18.6128L6 6H12.6774L14.5322 7.1129L16.387 6H17.4999L17.4999 17.2403C17.4999 18.8725 18.3903 20.3564 19.7999 21.1354C20.987 21.8031 22.7306 22.6935 25.2902 22.6935C26.4031 22.6935 28.6289 23.0644 28.6289 24.1773L28.9999 26.9463Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <span className="item__name">Обувь</span>
                                <span className="has-arrow"></span>

                                <ul className="item__menu">
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Обувь</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Женская обувь</a>
                                        </div>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Туфли</a>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Полуботинки</a>
                                        </div>
                                    </li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Кроссовки</a>
                                        </div>
                                    </li>


                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Детская обувь</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="mobile-menu__item item">
                                <span className="item__icon">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.8878 19.3089C24.8878 14.9121 21.3614 11.3573 16.9998 11.3573C12.6261 11.3573 9.11182 14.9469 9.11182 19.3089C9.11182 23.7057 12.6382 27.2605 16.9998 27.2605C21.3614 27.2605 24.8878 23.7057 24.8878 19.3089Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M21.2224 22.3021C20.712 21.5069 20.4336 20.5714 20.4336 19.5424C20.4336 18.4198 20.8048 17.3908 21.3616 16.5489C20.4336 15.0521 18.8096 14.0698 16.9536 14.0698C14.0768 14.0698 11.7568 16.4085 11.7568 19.3085C11.7568 22.2085 14.0768 24.5472 16.9536 24.5472C18.7632 24.5472 20.2944 23.6585 21.2224 22.3021Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7.25586 7.58411H26.7439" stroke="#464646" stroke-width="1.4"
                                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path
                                            d="M26.7439 32H7.2559C6.2351 32 5.3999 31.1581 5.3999 30.129V4.40323C5.3999 3.60806 6.0031 3 6.7919 3H27.2079C27.9967 3 28.5999 3.60806 28.5999 4.40323V30.129C28.5999 31.1581 27.7647 32 26.7439 32Z"
                                            stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <span className="item__name">Бытовая техника</span>
                                <span className="has-arrow"></span>

                                <ul className="item__menu">
                                    <li className="item__back">
                                        <span className="has-long-arrow"></span>
                                        Назад
                                    </li>
                                    <li className="item__title"><span>Бытовая техника</span></li>

                                    <li className="item__sublevel sublevel">
                                        <div className="item__link">
                                            <a href="">Встраиваемая техника</a>
                                        </div>
                                    </li>

                                    <li className="item__link">
                                        <a href="">Мелкая техника для кухни</a>
                                    </li>

                                    <li className="item__link">
                                        <a href=""> Телевизоры, Аудио-видео</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;