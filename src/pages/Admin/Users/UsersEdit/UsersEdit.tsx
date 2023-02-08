import React from 'react';
import "./UsersEdit.scss";
import {Popup} from "../../../../components/UI";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {UsersForm} from "../index";

const UsersEdit = () => {
    const {onUserEditPopupClick} = useActions()
    const {isUserEditModalOpen, userEdit} = useTypedSelector(state => state.admin)

    return (
        <Popup isOpen={isUserEditModalOpen} onClose={onUserEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить данные</div>
                    <UsersForm
                        id={userEdit}
                        buttonValue='Изменить'
                    />
                </div>
            </div>
        </Popup>
    );
};

export default UsersEdit;