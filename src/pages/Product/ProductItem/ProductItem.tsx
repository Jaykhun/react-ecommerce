import React from 'react';
import "./ProductItem.scss"
import Location from "../../../components/Location";

const ProductItem = () => {
    return (
        <div className="content__body">
            <Location/>
            <div className="content__product product">
                <div className="product__title title">Телевизор KD-55XD8577</div>
                <div className="product__inner">
                    <div className="product__control">
                        <div className="product__sale sale">
                            <div className="sale__body">
                                <div className="word-sale">sale</div>
                                <div className="sale__content">
                                    <div className="sale__top">
                                        <div className="product__price">1200 &#36;</div>
                                        <div className="product__amount">
                                            <button className="product__decrease disable-btn"></button>
                                            <input type="number" className="product__count" value="1" max="10" min="1"/>
                                            <button className="product__increase"></button>
                                        </div>
                                    </div>
                                    <div className="sale__buttons buttons">
                                        <button className="btn w-bg-r-btn w-opacity buttons__cart">В
                                            корзину
                                        </button>
                                        <button className="btn buttons__buy">Купить в 1
                                            клик
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product__info info">
                            <div className="info__inner">
                                <div className="info__venders">Hekiu</div>
                                <div className="info__delivery">
                                    Доставка осуществляется курьером транспортной компании.
                                </div>

                                <div className="info__option option">
                                    <div className="option__item">
                                        <div className="option__title">
                                            Выходы
                                        </div>

                                        <div className="option__info">
                                            оптический
                                        </div>
                                    </div>

                                    <div className="option__item">
                                        <div className="option__title">
                                            Технология 3D
                                        </div>

                                        <div className="option__info">
                                            активная
                                        </div>
                                    </div>

                                    <div className="option__item">
                                        <div className="option__title">
                                            Разрешение экрана
                                        </div>

                                        <div className="option__info">
                                            4K UHD, HDR
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__slider">
                        <img src="https://universal-shop-pro.21.oml.ru/thumb/2/fswDdTQ2MO4pQZsq9iuJ_w/600r600/d/359.jpg"
                             alt=""/>
                    </div>
                </div>

                <div className="product__footer">
                    <div className="product__navigation">
                        <a href="#" className="product__previous">
                            Предыдущий
                        </a>
                        <a href="#" className="product__next">
                            Следующий
                        </a>
                    </div>

                    <div className="product__tabs tabs">
                        <ul className="tabs__list">
                            <li className="tabs__link active-tab-link">Описание</li>
                            <li className="tabs__link">Параметры</li>
                            <li className="tabs__link">Доставка</li>
                        </ul>

                        <div className="tabs__body">
                            <div className="tabs__item item active-item">
                                <p className="item__text">В этом блоке мы рекомендуем разместить полный каталог
                                    с описанием Ваших
                                    товаров/услуг, рассказать о характеристиках предлагаемых товаров,
                                    создать любую удобную, соответствующую задачам вашего бизнеса, структуру
                                    каталога.
                                </p>

                                <p className="item__title">Большой выбор товаров</p>
                                <p className="item__info">Если Вы хотите, чтобы Ваш сайт не просто занимал свою
                                    нишу в сети Интернет, но и хорошо воспринимался поисковыми системами, Вы
                                    можете прочитать рекомендации, которые дает Яндекс - «Чем отличается
                                    качественный сайт от некачественного с точки зрения Яндекса» .</p>

                                <p className="item__title">Доставка</p>
                                <p className="item__info">
                                    На сайте Вы можете размещать фотографии как на текстовых страницах, так
                                    и создавать фотогалереи. Наша система управления позволяет автоматически
                                    уменьшать фотографии, и все же мы рекомендуем при работе с изображениями
                                    в графических редакторах пользоваться функцией «Сохранить для Web». Она
                                    позволяет значительно сжимать размеры изображений. Благодаря этому
                                    быстрее загружается сайт и меньше расходуется трафик, что актуально для
                                    пользователей, которые не имеют доступа к безлимитному Интернету.
                                </p>

                                <p className="item__title">Оплата и возврат</p>
                                <p className="item__info">
                                    Обращаем Ваше внимание, что текстовая информация на сайте должна быть
                                    индивидуальной, не скопированной с других Интернет-ресурсов, о чем
                                    указано в рекомендациях Яндекса: «Мы стараемся не индексировать или не
                                    ранжировать высоко сайты, копирующие информацию с других ресурсов и не
                                    создающие оригинального контента или сервиса».
                                </p>
                            </div>

                            <div className="tabs__item option item">
                                <div className="option__item">
                                    <div className="option__title">Выходы</div>
                                    <div className="option__info">оптический</div>
                                </div>

                                <div className="option__item">
                                    <div className="option__title">Гарантия</div>
                                    <div className="option__info">1 год</div>
                                </div>


                                <div className="option__item">
                                    <div className="option__title">Технология 3D</div>
                                    <div className="option__info">активная</div>
                                </div>

                                <div className="option__item">
                                    <div className="option__title">Разрешение экрана</div>
                                    <div className="option__info">4K UHD, HDR</div>
                                </div>

                                <div className="option__item">
                                    <div className="option__title">Частота экрана</div>
                                    <div className="option__info">1000 Гц</div>
                                </div>
                            </div>

                            <div className="tabs__item item ">
                                <p className="item__text">
                                    На сайте Вы можете размещать фотографии как на текстовых страницах, так
                                    и создавать фотогалереи. Наша система управления позволяет автоматически
                                    уменьшать фотографии, и все же мы рекомендуем при работе с изображениями
                                    в графических редакторах пользоваться функцией «Сохранить для Web». Она
                                    позволяет значительно сжимать размеры изображений. Благодаря этому
                                    быстрее загружается сайт и меньше расходуется трафик, что актуально для
                                    пользователей, которые не имеют доступа к безлимитному Интернету.
                                </p>

                                <p className="item__title">
                                                <span className="item__icon">
                                                    <svg height="64"
                                                         viewBox="0 0 64 64" width="64"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 25a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm46.362 8.733l-2.591-.864a1.77 1.77 0 0 1-.817-.701l-3.1-6.227a2.766 2.766 0 0 0-2.336-1.441H40V18a2.998 2.998 0 0 0-2.997-3H10.996A2.994 2.994 0 0 0 8 18v3.001a1 1 0 0 0 2 0v-3A.995.995 0 0 1 10.997 17h26.007A.998.998 0 0 1 38 18v17.001a1 1 0 0 0 2 0V26.5h5.518a.82.82 0 0 1 .545.332l3.1 6.227a3.717 3.717 0 0 0 1.975 1.708l2.591.864A.51.51 0 0 1 54 36v5H40v-2.001a1 1 0 0 0-2 0V41H10V28.999a1 1 0 0 0-2 0V43h46v5.01a.997.997 0 0 1-1.002.99H51.9a5 5 0 0 0-9.798 0H21.899a5 5 0 0 0-9.798 0H9a1 1 0 0 0 0 2h3.1a5 5 0 0 0 9.8 0h20.2a5 5 0 0 0 9.8 0h1.098A2.997 2.997 0 0 0 56 48.01V36a2.48 2.48 0 0 0-1.638-2.268zM17 53a2.994 2.994 0 0 1-2.898-2.263c-.015-.058-.034-.114-.045-.173a2.824 2.824 0 0 1 0-1.128c.011-.059.03-.115.045-.173a2.987 2.987 0 0 1 5.796 0c.015.058.034.114.045.173a2.824 2.824 0 0 1 0 1.128c-.011.059-.03.115-.045.173A2.994 2.994 0 0 1 17 53zm30 0a2.994 2.994 0 0 1-2.898-2.263c-.015-.058-.034-.114-.045-.173a2.824 2.824 0 0 1 0-1.128c.011-.059.03-.115.045-.173a2.987 2.987 0 0 1 5.796 0c.015.058.034.114.045.173a2.824 2.824 0 0 1 0 1.128c-.011.059-.03.115-.045.173A2.994 2.994 0 0 1 47 53z">
                                                        </path>
                                                    </svg>
                                                </span>
                                    Стандартная доставка
                                </p>
                                <p className="item__info">
                                    В этом блоке мы рекомендуем разместить информацию о Вашей организации,
                                    подчеркнуть ее значимость и надежность на рынке оказываемых услуг или
                                    предлагаемых товаров. В случае если у Вас возникли вопросы при
                                    оформлении заказа, Вы всегда можете обратиться в наш справочный центр по
                                    телефону (Укажите номер телефона) или воспользовавшись
                                    онлайн-консультантом на сайте.
                                </p>

                                <p className="item__title"> <span className="item__icon">
                                                    <svg height="64"
                                                         viewBox="0 0 64 64" width="64"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <title></title>
                                                        <path
                                                            d="M52.04 16H10a1 1 0 0 0 0 2h41.53L32.78 35.411a1.224 1.224 0 0 1-1.598.008l-3.513-3.162a1 1 0 0 0-1.338 1.486l3.513 3.162a3.222 3.222 0 0 0 4.296-.028l3.808-3.536L51.06 46.015H24a1 1 0 0 0 0 2h28.052a2.998 2.998 0 0 0 2.995-2.992v-26.03A3.004 3.004 0 0 0 52.039 16zm1.007 29.023a.99.99 0 0 1-.008.124L39.416 31.978l13.63-12.657v25.701z">
                                                        </path>
                                                        <path
                                                            d="M22.01 36h-4.02a1 1 0 0 0 0 2h4.02a1 1 0 0 0 0-2zM16.01 26h-4.02a1 1 0 0 0 0 2h4.02a1 1 0 0 0 0-2z">
                                                        </path>
                                                        <circle cx="24" cy="30" r="1"></circle>
                                                    </svg>
                                                </span> Экспресс-доставка
                                </p>
                                <p className="item__info">
                                    В этом блоке мы рекомендуем разместить информацию о Вашей организации,
                                    подчеркнуть ее значимость и надежность на рынке оказываемых услуг или
                                    предлагаемых товаров. В случае если у Вас возникли вопросы при
                                    оформлении заказа, Вы всегда можете обратиться в наш справочный центр по
                                    телефону (Укажите номер телефона) или воспользовавшись
                                    онлайн-консультантом на сайте.
                                </p>

                                <p className="item__txt">Возврат товара</p>
                                <p className="item__footer">
                                    Обращаем Ваше внимание, что текстовая информация на сайте должна быть
                                    индивидуальной, не скопированной с других интернет-ресурсов, о чем
                                    указано в рекомендациях Яндекса: «Мы стараемся не индексировать или не
                                    ранжировать высоко сайты, копирующие информацию с других ресурсов и не
                                    создающие оригинального контента или сервиса».
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;