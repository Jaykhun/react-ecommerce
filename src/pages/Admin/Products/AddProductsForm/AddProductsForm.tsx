import {useAddProductMutation} from "../../../../store/product/productApi";
import SelectComponent from "../../../../components/UI/Select";
import {UploadFile} from "../index";
import {useForm} from 'react-hook-form';
import "./AddProductForm.scss";

type FormValues = {
    productName: string;
    lastName: string;
};

const AddProductsForm = () => {
    const {} = useAddProductMutation()
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<FormValues>({mode: 'onChange'})

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <form action="#" className="all-products__form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__top">
                <div className="form__productName">
                    <label htmlFor="productName" className="input-text">
                        название продукта
                    </label>
                    <input
                        type="text"
                        className="input-style"
                        id="productName"
                        {...register(
                            'productName',
                            {
                                required: 'поле обязательно к заполнению',
                                minLength: {value: 5, message: 'Минимум 5 символов'}
                            }
                        )}
                    />
                    {errors?.productName && <span className="input-error">{errors.productName.message}</span>}
                </div>

                <div className="form__price">
                    <div className="price">
                        <label htmlFor="productPrice" className="input-text">цена</label>
                        <input
                            type="number"
                            className="input-style"
                            id="productPrice"

                        />
                    </div>

                    <div className="discount">
                        <label htmlFor="productDiscount" className="input-text">скидка</label>
                        <input type="number" className="input-style" id="productDiscount"/>
                    </div>
                </div>
            </div>

            <div className="form__file">
                <SelectComponent/>
                <UploadFile/>
            </div>

            <div>
                <div className="form__item">
                    <label htmlFor="productDescription" className="input-text">описание продукта</label>
                    <textarea id="productDescription" className="input-style"></textarea>
                </div>
            </div>

            <button disabled={!isValid} className="btn r-btn w-opacity form__submit">Добавить</button>
        </form>
    );
};

export default AddProductsForm;