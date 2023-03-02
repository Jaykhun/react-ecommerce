import React from 'react';
import "./Register.scss"
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="content__body">
            <div className="site-path">
                <Link className="site-history" to="/">Главная</Link>
                <span className="current-site" >Регистрация</span>
            </div>
            <h1 className="title">Регистрация</h1>
            <form action="#" className="content__register form">
                <div className="form__email">
                    <label htmlFor="email" className="input-text">
                        E-mail <span className="required-form">*</span>
                    </label>
                    <input type="email" id="email" className="input-style"/>
                </div>

                <div className="form__password">
                    <label htmlFor="password" className="input-text">
                        Пароль<span className="required-form">*</span>
                    </label>
                    <input type="password" id="password" className="input-style"/>
                </div>

                <div className="form__password">
                    <label htmlFor="repeat-password" className="input-text">
                        Введите пароль повторно
                        <span className="required-form">*</span>
                    </label>
                    <input type="password" id="repeat-password" className="input-style"/>
                </div>

                <div className="form__text">
                    <label htmlFor="text" className="input-text">Имя <span className="required-form">*</span></label>
                    <input type="text" id="text" className="input-style"/>
                </div>

                <div className="form__phone">
                    <label htmlFor="phone" className="input-text">Телефон <span
                        className="required-form">*</span></label>
                    <input type="phone" id="phone" className="input-style"/>
                </div>

                <button type="submit" className="form__submit btn r-btn w-opacity">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;