import React from 'react';
import {Popup} from "../../../components/UI";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ProfileForm} from "../index";

const ProfileEdit = () => {
    const {onUserEditPopupClick} = useActions()
    const {isUserEditModalOpen, userId} = useTypedSelector(state => state.admin)

    return (
        <Popup isOpen={isUserEditModalOpen} onClose={onUserEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить данные</div>
                    <ProfileForm/>
                </div>
            </div>
        </Popup>
    );
};

export default ProfileEdit;