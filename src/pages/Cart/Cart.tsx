import Location from "../../components/Location";
import "./Cart.scss";
import CatalogMenu from "../../components/Menu/CatalogMenu";
import {ProductControl} from "../../components/UI";

const Cart = () => {
    return (
        <div className="main-content content cart">
            <Location/>

            <div className="content__title title">Корзина</div>

            <div className="content__aside aside cart">
                <div className="aside__folders">
                    <CatalogMenu/>
                </div>
            </div>
            <div className="content__body cart">
                <div className="content__inner">
                    <div className="content__cart cart">
                        <div className="cart__product product">
                            <div className="product__head">
                                <div className="product__heading">Товар</div>
                                <div className="product__heading">
                                    <span>Цена</span>
                                    <span>Кол-во</span>
                                    <span>Сумма</span>
                                </div>
                            </div>

                            <div className="product__body">
                                <a href="./index.html" className="mobile-cart-back product__back btn b-opacity">К
                                    покупкам</a>

                                <div className="product__item">
                                    <div className="product__info">
                                        <div className="product__img">
                                            <img
                                                src="https://universal-shop-pro.21.oml.ru/thumb/2/k31h86c5A78nqIZ2uqo40A/600r600/d/432_0.jpg"
                                                alt=""/>
                                        </div>

                                        <div className="product__brand">
                                            <div className="product__name">Телевизор KD-55XD8577</div>
                                            <div className="product__vendors">Hekiu</div>
                                        </div>
                                    </div>

                                    <div className="product__control">
                                        <div className="product__price">500 &#36;</div>
                                        <ProductControl/>
                                        <div className="product__sum">1000 &#36;</div>
                                        <div className="product__delete"></div>
                                    </div>
                                </div>

                                <div className="product__item">
                                    <div className="product__info">
                                        <div className="product__img">
                                            <img
                                                src="https://universal-shop-pro.21.oml.ru/thumb/2/fswDdTQ2MO4pQZsq9iuJ_w/600r600/d/359.jpg"
                                                alt=""/>
                                        </div>

                                        <div className="product__brand">
                                            <div className="product__name">Телевизор KD-55XD8577</div>
                                            <div className="product__vendors">Hekiu</div>
                                        </div>
                                    </div>

                                    <div className="product__control">
                                        <div className="product__price">500 &#36;</div>
                                        <ProductControl/>
                                        <div className="product__sum">1000 &#36;</div>
                                        <div className="product__delete"></div>
                                    </div>
                                </div>

                                <div className="product__footer">
                                    <a href="./index.html" className="product__back btn b-opacity">К покупкам</a>
                                    <div className="product__clean">Очистить корзину</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__total total">
                        <div className="total__body">
                            <div className="total__title">Расчет</div>

                        </div>
                        <div className="total__sum sum">
                            <span className="sum__word">Итого:</span>
                            <span className="sum__price">2000 &#36;</span>
                        </div>
                    </div>
                </div>

                <div className="content__delivery delivery">
                    <div className="delivery__title">Доставка</div>

                    <div className="delivery__body">
                        <div className="delivery__subtitle">Почта Узбекистана - бесплатно</div>
                        <form action="#" className="delivery__form">
                            <label htmlFor="fullName" className="delivery__txt input-text">ФИО
                                <span className="required-form">*</span></label>
                            <input type="text" className="input-style" id="fullName"/>

                            <label htmlFor="deliveryAddress" className="delivery__txt input-text">Адрес доставки
                                <span className="required-form">*</span></label>
                            <textarea name="" id="deliveryAddress" className="input-style"></textarea>

                            <label htmlFor="postCode" className="delivery__txt input-text">Почтовый индекс
                                <span className="required-form">*</span></label>
                            <input type="text" className="input-style" id="postCode"/>

                            <label htmlFor="telephone" className="delivery__txt input-text">Телефон
                                <span className="required-form">*</span></label>
                            <input type="number" className="input-style" id="telephone"/>

                            <div className="delivery__title">Форма заказа</div>

                            <label htmlFor="fullName" className="delivery__txt input-text">ФИО
                                <span className="required-form">*</span></label>
                            <input type="text" className="input-style" id="fullName"/>

                            <label htmlFor="telephone" className="delivery__txt input-text">Телефон
                                <span className="required-form">*</span></label>
                            <input type="number" className="input-style" id="telephone"/>

                            <label htmlFor="email" className="delivery__txt input-text">Email
                                <span className="required-form">*</span></label>
                            <input type="email" className="input-style" id="email"/>

                            <button className="delivery__submit btn w-opacity r-btn">Оформить
                                заказ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;