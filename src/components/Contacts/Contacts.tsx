import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import "./Contacts.scss";

const Contacts = () => {
    const {onCallBackClick, onPhoneClick} = useActions()

    return (
        <section className="main-top">
            <div className="main-top__title">
                <Link to="/" className="title">Название компании</Link>
                <span className="subtitle">Магазин универсальных товаров</span>
            </div>

            <div className="main-top__contacts">
                <div className="contacts__body">
                    <div className="contacts__phone">
                        <p className="contacts__text">Ташкент</p>
                        <a className="contacts__number" href="tel:998901711717">+998 90 171 17 17</a>
                        <p className="contacts__workday">Пн-Вс: 8:00 - 20:00</p>
                        <div className="contacts__popup"
                             onClick={() => onPhoneClick()}>
                        </div>
                    </div>
                    <div className="contacts__recall" onClick={() => onCallBackClick()}>
                                <span className="btn w-r-btn">
                                    Обратный звонок
                                </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;