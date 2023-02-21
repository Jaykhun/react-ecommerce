import {FC, useId, useCallback} from "react";
import "./ProductForm.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message/dist";
import {ActionAlert, ActionLoader, InputError, Select} from "../../../../components/UI";
import {useGetAllCategoriesQuery} from "../../../../store/category/categoryApi";
import {IProduct} from "../../../../store/product/productTypes";
import {
    useUpdateProductMutation,
    useAddProductMutation,
    useGetSingleProductQuery
} from "../../../../store/product/productApi";
import {useActions} from "../../../../hooks/useActions";

interface ProductsFormPropsType {
    buttonValue: string,
    id?: number
}

const ProductsForm: FC<ProductsFormPropsType> = ({buttonValue, id}) => {
    const {onProductEditPopupClick} = useActions()
    const {data} = useGetAllCategoriesQuery()
    const {
        data: product,
        isSuccess,
        isLoading: singProductIsLoading,
        error: singleProductError,
        isError: isProductError
    } =
        useGetSingleProductQuery(id, {
            skip: !id,
        })
    const [updateProduct,
        {
            isError: updateIsError,
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            error: updateError
        }] = useUpdateProductMutation()
    const [addProduct,
        {
            isError: addIsError,
            isLoading: addIsLoading,
            isSuccess: addIsSuccess,
            error: addError
        }] = useAddProductMutation()

    const initialVales = {
        name: isSuccess ? product?.name : '',
        price: isSuccess ? product?.price : 0,
        quantity: isSuccess ? product?.quantity : 0,
        discount: isSuccess ? product?.discount : 0,
        description: isSuccess ? product?.description : '',
        images: isSuccess ? product?.images : [],
        category: isSuccess ? product?.category : {}
    }

    const name = useId()
    const price = useId()
    const discount = useId()
    const category = useId()
    const images = useId()
    const description = useId()
    const quantity = useId()

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<IProduct>({mode: 'onBlur', defaultValues: initialVales})

    const onSubmit: SubmitHandler<IProduct> = useCallback((data) => {
        console.log(data, 'data')

        if (product) {
            updateProduct(data)
            return updateIsSuccess ? onProductEditPopupClick() : ''
        } else {
            addProduct(data)
        }

        reset()
    }, [])

    return (
        <>
            <form className="all-products__form form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__top">
                    <div className="form__productName">
                        <label htmlFor={name} className="input-text">
                            название продукта
                        </label>
                        <input
                            type="text"
                            id={name}
                            className="input-style"
                            {...register(
                                'name',
                                {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {value: 5, message: 'Минимум 5 символов'},
                                    maxLength: {value: 30, message: 'Максимум 30 символов'}
                                }
                            )}
                        />
                        <ErrorMessage name={'name'}
                                      errors={errors}
                                      render={({message}) => <InputError message={message}/>}
                        />
                    </div>

                    <div className="form__price">
                        <div className="price">
                            <label htmlFor={price} className="input-text">цена &#36;</label>
                            <input
                                type="number"
                                id={price}
                                className="input-style"
                                {...register(
                                    'price',
                                    {
                                        valueAsNumber: true,
                                        required: 'Поле обязательно к заполнению',
                                        min: {value: 1, message: 'Минимум цена 1 доллар'},
                                        max: {value: 10000, message: 'Максимум цена 10000 доллар'}
                                    }
                                )}
                            />
                            <ErrorMessage name={'price'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <div className="discount">
                            <label htmlFor={discount} className="input-text">скидка &#37;</label>
                            <input type="number"
                                   id={discount}
                                   className="input-style"
                                   {...register(
                                       'discount',
                                       {
                                           valueAsNumber: true,
                                           min: {value: 0, message: 'Минимум скидка 1 %'},
                                           max: {value: 99, message: 'Максимум скидка 99 %'}
                                       }
                                   )}
                            />
                            <ErrorMessage name={'discount'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>
                    </div>
                </div>

                <div className="form__file">
                    <div className="form__body">
                        <div className="form__category">
                            <Controller
                                control={control}
                                name={'category'}
                                rules={
                                    {required: 'Поле обязательно к заполнению'}
                                }
                                render={({field, fieldState: {error}}) =>
                                    <Select
                                        id={category}
                                        data={data}
                                        isLoading={singProductIsLoading}
                                        error={singleProductError}
                                        isError={isProductError}
                                        multi={false}
                                        field={field}
                                        errors={error}
                                        labelText='категории'
                                    />
                                }
                            />

                            <ErrorMessage name={'category'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>

                        <div className="form__quantity">
                            <label htmlFor={quantity} className="input-text">Количество</label>
                            <input
                                type="number"
                                id={quantity}
                                className="input-style"
                                {...register(
                                    'quantity',
                                    {
                                        valueAsNumber: true,
                                        required: 'Поле обязательно к заполнению',
                                        min: {value: 10, message: 'Количество продуктов должна быть не менее 10-ти'},
                                        max: {value: 1000, message: 'Количество продуктов должна быть не больше 1000'}
                                    }
                                )}
                            />
                            <ErrorMessage name={'quantity'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>
                    </div>

                    <div className="form__file">
                        <div className="file">
                            <label htmlFor={images} className="input-text">Картинка</label>
                            <input
                                type="text"
                                id={images}
                                className="input-style"
                                {...register(
                                    'images',
                                    {
                                        required: 'Поле обязательно к заполнению',
                                        minLength: {value: 1, message: 'Добавитье ссылку'},
                                    }
                                )}
                            />
                            <ErrorMessage name={'images'}
                                          errors={errors}
                                          render={({message}) => <InputError message={message}/>}
                            />
                        </div>
                    </div>
                </div>

                <div className="form__description">
                    <label htmlFor={description} className="input-text">описание продукта</label>
                    <textarea id={description}
                              className="input-style"
                              {...register(
                                  'description',
                                  {
                                      required: 'Поле обязательно к заполнению',
                                      minLength: {value: 10, message: 'Минимум 10 символов'},
                                      maxLength: {value: 100, message: 'Максимум 50 символов'}
                                  }
                              )}
                    />
                    <ErrorMessage name={'description'}
                                  errors={errors}
                                  render={({message}) => <InputError message={message}/>}
                    />
                </div>

                {product ? <button disabled={!isDirty}
                                   className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
                        {buttonValue}</button>
                    : <button className={`btn r-btn w-opacity form__submit`}>{buttonValue}</button>
                }
            </form>
            {addIsLoading && <ActionLoader/>}
            {updateIsLoading && <ActionLoader/>}
            {singProductIsLoading && <ActionLoader/>}
            {addIsError && <ActionAlert message={'Error'} error={addError}/>}
            {updateIsError && <ActionAlert message={'NotFound on update'} error={updateError}/>}
            {addIsSuccess && <ActionAlert message={'Success'} success={addIsSuccess}/>}
            {updateIsSuccess && <ActionAlert message={'Success'} success={updateIsSuccess}/>}
        </>
    );
};

export default ProductsForm;