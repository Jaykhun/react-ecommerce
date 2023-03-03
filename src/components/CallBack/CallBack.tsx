import React from 'react';
import {Popup} from "../UI";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./CallBack.scss";

const CallBack = () => {
    const {onCallBackClick} = useActions()
    const {isCallBackOpen} = useTypedSelector(state => state.popup)

    return (
        <Popup isOpen={isCallBackOpen} onClose={onCallBackClick}>
            <div className="popup-callback">
                <div className="popup-callback__inner">
                    <div className="popup-callback__title">Обратный Званок</div>
                </div>

                <form className="popup-callback__form">
                    <div className="popup-callback__name">
                        <label htmlFor="name" className="input-text">Имя</label>
                        <input type="text" id="name" className="input-style"/>
                    </div>

                    <div className="popup-callback__number">
                        <label htmlFor="name" className="input-text">Телефон</label>
                        <input type="tel" id="name" className="input-style"/>
                    </div>

                    <button className="popup-callback__submit btn r-btn q-opacity">Отправить</button>
                </form>
            </div>
        </Popup>
    );
};

export default CallBack;