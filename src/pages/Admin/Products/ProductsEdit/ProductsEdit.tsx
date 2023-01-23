import {Popup} from "../../../../components/UI";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ProductsForm} from "../index";
import "./ProductsEdit.scss";
import {useUpdateProductMutation} from "../../../../store/product/productApi";

const ProductsEdit = () => {
    const {onProductEditPopupClick} = useActions()
    const {isProductEditModalOpen, productEdit} = useTypedSelector(state => state.admin)
    const [updateProduct] = useUpdateProductMutation()

    return (
        <Popup isOpen={isProductEditModalOpen} onClose={onProductEditPopupClick}>
            <div className="popup-edit">
                <div className="popup-edit__inner">
                    <div className="popup-edit__title">Изменить продукт</div>
                    <ProductsForm
                        action={updateProduct}
                        product={productEdit}
                        buttonValue='Изменить'
                    />
                </div>
            </div>
        </Popup>
    );
};

export default ProductsEdit;