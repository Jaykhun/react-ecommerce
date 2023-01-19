import Popup from "../../UI/Popup/Popup";
import "./SignInPopup.scss";
import "../../UI/Popup/Popup.scss";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const SignInPopup = () => {
    const {onSignInClick} = useActions()
    const {isSignInModuleOpen} = useTypedSelector(state => state.popup)

    return (
        <Popup isOpen={isSignInModuleOpen} onClose={onSignInClick}>
            <div className="signin-popup">
                <div className="signin-popup__inner">
                    <div className="signin-popup__contacts">
                        <button className="popup__close signin-popup__close"
                                onClick={() => onSignInClick()}></button>
                        <div className="signin__body">
                            <div className="signin__title">Кабинет</div>
                            <form action="#" className="signin__form">
                                <div className="signin__login">
                                    <label htmlFor="signin__login" className="input-text">Логин</label>
                                    <input type="text" id="signin__login" className="signin__login input-style"/>
                                </div>

                                <div className="signin__password">
                                    <label htmlFor="signin__password" className="input-text">Пароль</label>
                                    <input type="password" id="signin__password" className="signin__login input-style"/>
                                </div>
                            </form>
                            <div className="signin__footer">
                                <a href="#" className="signin__forgot">Забыли пароль?</a>
                                <button className="signin__submit btn r-btn w-opacity">Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default SignInPopup;