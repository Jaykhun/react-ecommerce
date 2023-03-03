import React from 'react';
import "./AsideBar.scss";
import CatalogMenu from "../Menu/CatalogMenu";

const AsideBar = () => {
    return (
        <div className="content__aside aside">
            <div className="aside__folders">
                <CatalogMenu/>
                <div className="aside__product product">
                    <div className="product__header">
                        <div className="product__heading">товар дня</div>
                    </div>

                    <div className="product__body">
                        <div className="product__img">
                            <img src="https://universal-shop-pro.21.oml.ru/thumb/2/UqT68as8ttc4SpYIQFHvqw/r/d/7_1.jpg"
                                 alt="computer"/>
                        </div>

                        <div className="product__info">
                            <a className="product__title product-name">Стационарный компьютер A250</a>

                            <div className="product__sale">
                                <div className="word-sale">sale</div>
                                <div className="price-discount">-20%</div>
                            </div>

                            <div className="product__price price">
                                <div className="price__now price-current">4 000 &#36;</div>
                                <div className="price__later price-later">5 000 &#36;</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aside__sale sale">
                    <div className="sale__header">
                        <div className="sale__heading">
                            распродажа
                        </div>
                    </div>
                    <div className="sale__body">
                        <div className="sale__item item">
                            <div className="item__top">
                                <div className="item__img">
                                    <img
                                        src="https://universal-shop-pro.21.oml.ru/thumb/2/Ex2d9DP_0FptyN18HKf_NQ/350r350/d/kedy4.jpg"
                                        alt="shoes"/>
                                </div>

                                <div className="item__price price-current"> 200 &#36;</div>
                            </div>

                            <div className="item__info">
                                <div className="item__name product-name">Женские кеды</div>
                                <button className="item__cart"></button>
                            </div>
                        </div>

                        <div className="sale__item item">
                            <div className="item__top">
                                <div className="item__img">
                                    <img
                                        src="https://universal-shop-pro.21.oml.ru/thumb/2/b-peY_bC2uCk1kwy23bgHQ/350r350/d/kedy1jpg.jpg"
                                        alt="shoes"/>
                                </div>

                                <div className="item__price">
                                    <span className="price-current">400 &#36;</span>
                                    <span className="price-later">500 &#36;</span>
                                </div>
                            </div>

                            <div className="item__info">
                                <div className="item__name product-name">Женские кеды</div>
                                <button className="item__cart"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideBar;