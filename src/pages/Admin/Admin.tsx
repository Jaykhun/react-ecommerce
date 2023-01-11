import React from 'react';
import "./Admin.scss";

const Admin = () => {
    return (
        <>
            <section className="main-statistic statistic">
                <div className="statistic__inner">
                    <div className="statistic__item">
                        <span className="icon-pie-chart statistic__icon"></span>
                        <div className="statistic__info">
                            <span className="statistic__name">Сегодняшняя продажа</span>
                            <span className="statistic__text">278 &#36;</span>
                        </div>
                    </div>

                    <div className="statistic__item">
                        <span className="icon-statistic statistic__icon"></span>
                        <div className="statistic__info">
                            <span className="statistic__name">Общая продажа</span>
                            <span className="statistic__text">1046 &#36;</span>
                        </div>
                    </div>

                    <div className="statistic__item">
                        <span className="icon-users statistic__icon"></span>
                        <div className="statistic__info">
                            <span className="statistic__name">Пользователи</span>
                            <span className="statistic__text">25</span>
                        </div>
                    </div>

                    <div className="statistic__item">
                        <span className="icon-order statistic__icon"></span>
                        <div className="statistic__info">
                            <span className="statistic__name">Заказы</span>
                            <span className="statistic__text">102</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-info info admin">
                <div className="info__sales sales">
                    <div className="info__header">
                        <div className="info__title">Недавние продажи</div>
                        <a className="info__btn" href="#">Показать все</a>
                    </div>

                    <table className="sales__table">
                        <thead className="sales__head">
                        <tr className="sales__row">
                            <th>Сделано</th>
                            <th>Дата</th>
                            <th>Покупатель</th>
                            <th>Стоимость</th>
                            <th>Статус</th>
                            <th>Действие</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr className="sales__row">
                            <td className="sales__column">
                                <input type="checkbox" name="" id=""/>
                            </td>
                            <td className="sales__column">
                                02.12.2022
                            </td>
                            <td className="sales__column">
                                А. Александр
                            </td>

                            <td className="sales__column">
                                &#36; 140
                            </td>

                            <td className="sales__column">
                                Оплаченный
                            </td>

                            <td className="sales__column">
                                <button className="sales__btn">Подробности</button>
                            </td>
                        </tr>

                        <tr className="sales__row">
                            <td className="sales__column">
                                <input type="checkbox" name="" id=""/>
                            </td>
                            <td className="sales__column">
                                02.12.2022
                            </td>
                            <td className="sales__column">
                                А. Александр
                            </td>

                            <td className="sales__column">
                                &#36; 140
                            </td>

                            <td className="sales__column">
                                Оплаченный
                            </td>

                            <td className="sales__column">
                                <button className="sales__btn">Подробности</button>
                            </td>
                        </tr>

                        <tr className="sales__row">
                            <td className="sales__column">
                                <input type="checkbox" name="" id="" checked/>
                            </td>
                            <td className="sales__column">
                                02.12.2022
                            </td>
                            <td className="sales__column">
                                А. Александр
                            </td>

                            <td className="sales__column">
                                &#36; 140
                            </td>

                            <td className="sales__column">
                                Оплаченный
                            </td>

                            <td className="sales__column">
                                <button className="sales__btn">Подробности</button>
                            </td>
                        </tr>

                        <tr className="sales__row">
                            <td className="sales__column">
                                <input type="checkbox" name="" id="" checked/>
                            </td>
                            <td className="sales__column">
                                02.12.2022
                            </td>
                            <td className="sales__column">
                                А. Александр
                            </td>

                            <td className="sales__column">
                                &#36; 140
                            </td>

                            <td className="sales__column">
                                Оплаченный
                            </td>

                            <td className="sales__column">
                                <button className="sales__btn">Подробности</button>
                            </td>
                        </tr>

                        <tr className="sales__row">
                            <td className="sales__column">
                                <input type="checkbox" name="" id=""/>
                            </td>
                            <td className="sales__column">
                                02.12.2022
                            </td>
                            <td className="sales__column">
                                А. Александр
                            </td>

                            <td className="sales__column">
                                &#36; 140
                            </td>

                            <td className="sales__column">
                                Оплаченный
                            </td>

                            <td className="sales__column">
                                <button className="sales__btn">Подробности</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="info__users users">
                    <div className="info__header">
                        <div className="info__title">Недавние пользователей</div>
                        <a className="info__btn" href="#">Показать все</a>
                    </div>

                    <table className="users__table">
                        <thead className="users__head">
                        <tr className="users__row">
                            <th>Имя</th>
                            <th>Email</th>
                            <th>Телефон</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr className="users__row">
                            <td className="users__column">Егор</td>
                            <td className="users__column">egor@gmail.com</td>
                            <td className="users__column">+998901445522</td>
                        </tr>

                        <tr className="users__row">
                            <td className="users__column">Егор</td>
                            <td className="users__column">egor@gmail.com</td>
                            <td className="users__column">+998901445522</td>
                        </tr>

                        <tr className="users__row">
                            <td className="users__column">Егор</td>
                            <td className="users__column">egor@gmail.com</td>
                            <td className="users__column">+998901445522</td>
                        </tr>

                        <tr className="users__row">
                            <td className="users__column">Егор</td>
                            <td className="users__column">egor@gmail.com</td>
                            <td className="users__column">+998901445522</td>
                        </tr>

                        <tr className="users__row">
                            <td className="users__column">Егор</td>
                            <td className="users__column">egor@gmail.com</td>
                            <td className="users__column">+998901445522</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Admin;