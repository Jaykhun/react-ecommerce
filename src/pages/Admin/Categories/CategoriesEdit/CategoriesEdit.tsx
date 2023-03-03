import React from 'react';
import {Popup} from "../../../../components/UI";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {CategoriesForm} from "../index";

const CategoriesEdit = () => {
    const {onCategoryEditPopupClick} = useActions()
    const {isCategoryEditModalOpen, categoryId} = useTypedSelector(state => state.admin)

    return (
        <Popup isOpen={isCategoryEditModalOpen} onClose={onCategoryEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить категорию</div>
                    <CategoriesForm
                        id={categoryId}
                        buttonValue='Изменить'
                    />
                </div>
            </div>
        </Popup>
    );
};

export default CategoriesEdit;