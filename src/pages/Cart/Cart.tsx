import "./Cart.scss";
import CatalogMenu from "../../components/Menu/CatalogMenu";
import {ProductControl} from "../../components/UI";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div className="main-content content cart">
            <div className="site-path">
                <Link className="site-history" to="/">Главная</Link>
                <span className="current-site">Корзина</span>
            </div>
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
                                <Link to="/" className="mobile-cart-back product__back btn b-opacity">К
                                    покупкам</Link>

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
                                    <Link to="/" className="product__back btn b-opacity">К покупкам</Link>
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
            </div>
        </div>
    );
};

export default Cart;