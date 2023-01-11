import Popup from "../Popup/Popup";
import "./SignInPopup.scss";
import "../Popup/Popup.scss";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const SignInPopup = () => {
    const {onSignInClick} = useActions()
    const {isSignInModuleOpen} = useTypedSelector(state => state.popup)

    return (
        <Popup isOpen={isSignInModuleOpen} onClose={onSignInClick}>
            <div className="singin-popup__inner">
                <div className="singin-popup__contacts">
                    <button className="popup__close singin-popup__close"
                            onClick={() => onSignInClick()}></button>
                    <div className="singin__body">
                        <div className="singin__title">Кабинет</div>
                        <form action="#" className="singin__form">
                            <div className="singin__login">
                                <label htmlFor="singin__login" className="input-text">Логин</label>
                                <input type="text" id="singin__login" className="singin__login input-style"/>
                            </div>

                            <div className="singin__password">
                                <label htmlFor="singin__password" className="input-text">Пароль</label>
                                <input type="password" id="singin__password" className="singin__login input-style"/>
                            </div>
                        </form>
                        <div className="singin__footer">
                            <a href="#" className="singin__forgot">Забыли пароль?</a>
                            <button className="singin__submit btn r-btn w-opacity">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default SignInPopup;