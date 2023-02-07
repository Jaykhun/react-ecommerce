import React from 'react';
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {Popup} from "../../../../components/UI";
import {CountriesForm} from "../index";

const CountriesEdit = () => {
    const {onCountryEditPopupClick} = useActions()
    const {isCountryEditModalOpen, countryId} = useTypedSelector(state => state.admin)

    return (
        <Popup isOpen={isCountryEditModalOpen} onClose={onCountryEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить страну</div>
                    <CountriesForm
                        id={countryId}
                        buttonValue='Изменить'
                    />
                </div>
            </div>
        </Popup>
    )
};

export default CountriesEdit;