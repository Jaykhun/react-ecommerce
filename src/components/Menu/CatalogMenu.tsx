import React from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CatalogMenu = () => {
    const {isCatalogMenuOpen} = useTypedSelector(state => state.menu)

    return (
        <nav className={`aside__nav ${isCatalogMenuOpen ? "catalog-active" : ""}`}>
            <ul className="aside__menu menu">
                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
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
                        <span className="item__title">Компьютеры</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a className="sublevel__title" href="src/components/Main/MainAside/MainAside#MainAside.tsx">Компьютеры</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Ноутбуки</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Планшеты</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.2256 29.0969H19.1288" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path d="M24.9356 4.41931H10.4194V26.1935H24.9356V4.41931Z"
                                                          stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M25.4194 32H9.93548C8.87097 32 8 31.129 8 30.0645V3.93548C8 2.87097 8.87097 2 9.93548 2H25.4194C26.4839 2 27.3548 2.87097 27.3548 3.93548V30.0645C27.3548 31.129 26.4839 32 25.4194 32Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="square" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Телефоны</span>
                    </a>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
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
                                                    <path d="M7.25586 7.58411H26.7439" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path
                                                        d="M26.7439 32H7.2559C6.2351 32 5.3999 31.1581 5.3999 30.129V4.40323C5.3999 3.60806 6.0031 3 6.7919 3H27.2079C27.9967 3 28.5999 3.60806 28.5999 4.40323V30.129C28.5999 31.1581 27.7647 32 26.7439 32Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Бытовая техника</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Бытовая техника</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Встраиваемая
                                техникабуки</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Мелкая техника
                                для кухни</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Телевизоры, Аудио-видео</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 4.00012H20.0645C25.5742 4.00012 30 8.42593 30 13.9356V14.8388C30 18.813 26.7484 22.0646 22.7742 22.0646H12.3871C8.41291 22.0646 5.16129 18.813 5.16129 14.8388V12.4001C5.16129 11.1356 4.16774 10.1421 2.90323 10.1421H2"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M16 4L20.5161 13.9356H27.2903" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path d="M24.5806 8.51624L20.5161 13.9356" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path d="M5.2666 13.9358H29.9999" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path
                                                        d="M10.5807 32.0002C12.576 32.0002 14.1936 30.3827 14.1936 28.3873C14.1936 26.392 12.576 24.7744 10.5807 24.7744C8.58533 24.7744 6.96777 26.392 6.96777 28.3873C6.96777 30.3827 8.58533 32.0002 10.5807 32.0002Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M10.5805 29.2902C11.0793 29.2902 11.4837 28.8858 11.4837 28.387C11.4837 27.8882 11.0793 27.4838 10.5805 27.4838C10.0816 27.4838 9.67725 27.8882 9.67725 28.387C9.67725 28.8858 10.0816 29.2902 10.5805 29.2902Z"
                                                        fill="#464646"></path>
                                                    <path
                                                        d="M24.5807 32.0002C26.576 32.0002 28.1936 30.3827 28.1936 28.3873C28.1936 26.392 26.576 24.7744 24.5807 24.7744C22.5853 24.7744 20.9678 26.392 20.9678 28.3873C20.9678 30.3827 22.5853 32.0002 24.5807 32.0002Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M24.5805 29.2902C25.0793 29.2902 25.4837 28.8858 25.4837 28.387C25.4837 27.8882 25.0793 27.4838 24.5805 27.4838C24.0816 27.4838 23.6772 27.8882 23.6772 28.387C23.6772 28.8858 24.0816 29.2902 24.5805 29.2902Z"
                                                        fill="#464646"></path>
                                                    <path
                                                        d="M21.2838 22.0649C19.2064 25.8133 15.187 28.3875 10.5806 28.3875"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M13.9224 22.0645C15.8623 25.9444 20.3349 28.387 24.5804 28.387"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Детские товары</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Детские
                                товары</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Коляски</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Игрушки</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12.462 4.09414C12.6349 4.16919 12.7702 4.3108 12.8373 4.48692C13.0032 4.92203 13.3885 5.48954 13.9285 6.12455C15.7546 8.27188 19.096 8.27188 20.922 6.12455C21.462 5.48954 21.8474 4.92203 22.0132 4.48692C22.0804 4.3108 22.2157 4.16919 22.3886 4.09414C22.5615 4.01909 22.7573 4.01694 22.9318 4.08817L26.5406 5.56126C26.5414 5.56158 26.5422 5.56191 26.543 5.56224C27.2045 5.82738 27.7545 6.33302 28.1564 6.84942C28.1675 6.8637 28.1781 6.87842 28.188 6.89352L32.7345 13.7762C32.947 14.0978 32.8594 14.5308 32.5386 14.7445L27.9582 17.7962C27.6427 18.0064 27.2172 17.9273 26.9984 17.6177L25.7593 15.8645V29.9638C25.7593 30.3504 25.4459 30.6638 25.0593 30.6638H9.79124C9.40464 30.6638 9.09124 30.3504 9.09124 29.9638V15.8645L7.85213 17.6177C7.63333 17.9273 7.20785 18.0064 6.89237 17.7962L2.31195 14.7445C1.99112 14.5308 1.90351 14.0978 2.116 13.7762L6.66249 6.89352L6.66423 6.89088L6.66424 6.89089C7.03525 6.33471 7.6004 5.82263 8.31707 5.55834L11.9187 4.08817C12.0932 4.01694 12.2891 4.01909 12.462 4.09414ZM11.8427 5.63132L8.83434 6.85933C8.82592 6.86277 8.81743 6.86604 8.80888 6.86915C8.41282 7.01308 8.06703 7.31131 7.82969 7.66659C7.82942 7.667 7.82916 7.6674 7.82889 7.6678L3.66845 13.966L7.1019 16.2536L9.2196 13.2573C9.39561 13.0082 9.71257 12.9018 10.0032 12.9942C10.2938 13.0865 10.4912 13.3563 10.4912 13.6613V29.2638H24.3593V13.6613C24.3593 13.3563 24.5567 13.0865 24.8473 12.9942C25.138 12.9018 25.4549 13.0082 25.6309 13.2573L27.7486 16.2536L31.1821 13.966L27.0355 7.68878C26.7289 7.30025 26.3701 7.00081 26.0209 6.86124L26.0162 6.85935L26.0162 6.85933L23.0078 5.63132C22.736 6.1007 22.374 6.57827 21.9885 7.0315C19.6034 9.83623 15.2471 9.83623 12.862 7.0315C12.4766 6.57827 12.1145 6.1007 11.8427 5.63132Z"
                                                          fill="#464646"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Одежда</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Одежда</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Женщинам</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Мужчинам</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Детям</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.5322 22.3228V7.11316" stroke="#464646"
                                                          stroke-width="1.4" stroke-miterlimit="10"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                    <path
                                                        d="M28.9999 26.9224C28.9999 26.9304 29.0001 26.9384 28.9999 26.9463M28.9999 26.9463C28.9895 27.2704 28.7693 27.5548 28.4434 27.6272L26.0322 28.2578C24.6967 28.5546 22.3596 28.9998 21.0241 28.9998H19.9483C19.058 28.9998 18.2048 28.8514 17.3516 28.5917L14.7919 27.7385C14.3838 27.5901 13.9387 27.5159 13.4935 27.5159H12.6774V28.9998H9.00482C8.00322 28.9998 6.96451 28.8885 6 28.6288V26.0321L6.41071 25.3035C5.58929 22.0178 7.0758 19.3548 7.0758 19.3548C7.1129 19.0951 7.1129 18.8725 7.0758 18.6128L6 6H12.6774L14.5322 7.1129L16.387 6H17.4999L17.4999 17.2403C17.4999 18.8725 18.3903 20.3564 19.7999 21.1354C20.987 21.8031 22.7306 22.6935 25.2902 22.6935C26.4031 22.6935 28.6289 23.0644 28.6289 24.1773L28.9999 26.9463Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Обувь</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Обувь</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Женская
                                обувь</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Мужская
                                обувь</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Сапоги</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Кеды</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M25.1774 16.9033L25.8758 14.8081C26.0155 14.4356 26.3414 14.1562 26.7604 14.1562H29.0884C29.6937 14.1562 30.1127 14.715 29.973 15.3202L28.0641 23.2354C27.7382 24.4459 26.6673 25.3305 25.4102 25.3305H8.60438C7.34727 25.3305 6.2764 24.4925 5.95049 23.2354L4.04154 15.3202C3.85531 14.715 4.3209 14.1562 4.92618 14.1562H7.25415C7.62663 14.1562 7.99911 14.4356 8.13879 14.8081L8.83718 16.9033"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M25.55 20.5348C25.2241 21.2332 24.5257 21.7919 23.7342 21.8851C18.655 22.6107 15.3398 22.7958 10.2341 21.8385C9.44262 21.7453 8.74423 21.1866 8.41831 20.4882C7.85959 19.2311 7.25432 17.2756 8.51143 16.9497C14.6265 16.062 19.3609 16.0581 25.5035 16.9497C26.7606 17.2757 26.1088 19.2777 25.55 20.5348Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M7.25439 25.0055V27.6271C7.25439 27.9065 7.44063 28.0927 7.71999 28.0927H8.88398C9.02366 28.0927 9.16334 28.0462 9.25646 27.9065L11.2225 25.487"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M26.714 25.4871V27.6268C26.714 27.9061 26.5277 28.0924 26.2484 28.0924H25.0844C24.9447 28.0924 24.805 28.0458 24.7119 27.9061L22.2964 25.4871"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M28.5553 13.9314C31.2109 3.309 2.77836 3.01864 5.44421 13.9314"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Мебель</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Мебель</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Диваны и кресла</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Столы и стулья</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Офисные кресла и
                                стулья</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Зеркала и комоды</a>
                        </li>
                    </ul>
                </li>

                <li className="menu__item item">
                    <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="item__link">
                                            <span className="item__icon">
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.3335 7.2C12.2002 6.73333 12.6668 3 12.6668 3H22.0002C22.0002 3 22.4668 6.73333 24.3335 7.2"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M10.3335 27.7C12.2002 28.1667 12.6668 31.9 12.6668 31.9H22.0002C22.0002 31.9 22.4668 28.1667 24.3335 27.7"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M10.7998 21.6666H12.8531L14.0665 19.3333L16.1198 24L19.3865 14.2L21.8131 21.6666H23.8665"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linejoin="round"></path>
                                                    <path
                                                        d="M27 12H27.4667C27.7467 12 27.9333 12.1867 27.9333 12.4667V15.2667C27.9333 15.5467 27.7467 15.7333 27.4667 15.7333H27"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linejoin="round"></path>
                                                    <path
                                                        d="M27 18.4668H27.4667C27.7467 18.4668 27.9333 18.6535 27.9333 18.9335V21.7335C27.9333 22.0135 27.7467 22.2001 27.4667 22.2001H27"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linejoin="round"></path>
                                                    <path
                                                        d="M23.8667 27.7333H10.8C9.26 27.7333 8 26.4733 8 24.9333V9.99995C8 8.45995 9.26 7.19995 10.8 7.19995H23.8667C25.4067 7.19995 26.6667 8.45995 26.6667 9.99995V24.9333C26.6667 26.4733 25.4067 27.7333 23.8667 27.7333Z"
                                                        stroke="#464646" stroke-width="1.4" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path
                                                        d="M14.5999 12.0735C14.3666 11.7001 13.9933 11.4668 13.5266 11.4668C12.8266 11.4668 12.2666 12.0268 12.2666 12.6801C12.2666 14.2668 14.5999 15.6668 14.5999 15.6668C14.5999 15.6668 16.9333 14.2668 16.9333 12.6801C16.9333 12.0268 16.3733 11.4668 15.6733 11.4668C15.2066 11.4668 14.8333 11.7001 14.5999 12.0735Z"
                                                        fill="#464646"></path>
                                                </svg>
                                            </span>
                        <span className="item__title">Гаджеты</span>
                    </a>

                    <ul className="item__menu">
                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Гаджеты</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Наушники</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">FPV очки</a>
                        </li>

                        <li className="item__sublevel sublevel">
                            <a href="src/components/Main/MainAside/MainAside#MainAside.tsx" className="sublevel__title">Квадрокоптеры</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default CatalogMenu;