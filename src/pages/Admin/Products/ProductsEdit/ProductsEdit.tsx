import {Popup} from "../../../../components/UI";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ProductsForm} from "../index";
import "./ProductsEdit.scss";

const ProductsEdit = () => {
    const {onProductEditPopupClick} = useActions()
    const {isProductEditModalOpen, productEdit} = useTypedSelector(state => state.admin)

    return (
        <Popup isOpen={isProductEditModalOpen} onClose={onProductEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить продукт</div>
                    <ProductsForm
                        product={productEdit}
                        buttonValue='Изменить'
                    />
                </div>
            </div>
        </Popup>
    );
};

export default ProductsEdit;