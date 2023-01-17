import {useAddProductMutation} from "../../../../store/product/productApi";
import {useGetAllCategoriesQuery} from "../../../../store/category/category";
import SelectComponent from "../../../../components/UI/Select";
import {UploadFile} from "../index";
import {SubmitHandler, useForm} from 'react-hook-form';
import "./ProductForm.scss";
import {Controller} from "react-hook-form";

type FormValues = {
    productName: string,
    productPrice: number,
    productDiscount: number,
    productDescription: string,
    productCategory: string
};

const ProductsForm = () => {
    const [addProduct] = useAddProductMutation()
    const {data} = useGetAllCategoriesQuery()
    const {register, formState: {errors}, handleSubmit, reset, control} = useForm<FormValues>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        addProduct(data)
        reset();
    }

    return (
        <form className="all-products__form form" onSubmit={handleSubmit(onSubmit)}>
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
                                required: 'Поле обязательно к заполнению',
                                minLength: {value: 5, message: 'Минимум 5 символов'},
                                maxLength: {value: 20, message: 'Максимум 20 символов'}
                            }
                        )}
                    />
                    {errors?.productName && <span className="input-error">{errors.productName.message}</span>}
                </div>

                <div className="form__price">
                    <div className="price">
                        <label htmlFor="productPrice" className="input-text">цена &#36;</label>
                        <input
                            type="number"
                            id="productPrice"
                            className="input-style"
                            {...register(
                                'productPrice',
                                {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {value: 1, message: 'Минимум цена 1 доллар'},
                                    maxLength: {value: 5, message: 'Максимум цена 10000 доллар'}
                                }
                            )}
                        />
                        {errors?.productPrice &&
                            <span className="input-error">{errors.productPrice.message}</span>}
                    </div>

                    <div className="discount">
                        <label htmlFor="productDiscount" className="input-text">скидка &#37;</label>
                        <input type="number"
                               className="input-style"
                               id="productDiscount"
                               {...register(
                                   'productDiscount',
                                   {
                                       min: 0,
                                       max: 99,
                                   }
                               )}
                        />
                        {errors?.productDiscount &&
                            <span className="input-error">{errors.productDiscount.message}</span>}
                    </div>
                </div>
            </div>

            <div className="form__file">
                <Controller
                    control={control}
                    name='productCategory'
                    rules={{required: 'Поле обязательно к заполнению'}}
                    render={
                        ({
                             field: {onBlur},
                             fieldState: {error}
                         }) =>
                            <SelectComponent error={error} onBlur={onBlur} data={data}/>
                    }
                />
                <UploadFile/>
            </div>

            <div className="form__description">
                <label htmlFor="productDescription" className="input-text">описание продукта</label>
                <textarea id="productDescription"
                          className="input-style"
                          {...register(
                              'productDescription',
                              {
                                  required: 'Поле обязательно к заполнению',
                                  minLength: {value: 10, message: 'Минимум 10 символов'},
                                  maxLength: {value: 100, message: 'Максимум 50 символов'}
                              }
                          )}
                />
                {errors?.productDescription &&
                    <span className="input-error">{errors.productDescription.message}</span>}
            </div>

            <button className="btn r-btn w-opacity form__submit">Добавить</button>
        </form>
    );
};

export default ProductsForm;