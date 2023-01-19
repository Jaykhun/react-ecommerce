import {FC, useId} from "react";
import "./ProductForm.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useGetAllCategoriesQuery} from "../../../../store/category/category";
import {InputError, Select, UploadFile} from "../../../../components/UI";

type FormValues = {
    name: string,
    edit: number,
    discount: number,
    description: string,
    category: string,
    images: string
};

interface ProductsFormPropsType {
    action: any,
    buttonValue: string
}

const ProductsForm: FC<ProductsFormPropsType> = ({action, buttonValue}) => {
    const {data: categories} = useGetAllCategoriesQuery()
    const name = useId()
    const price = useId()
    const discount = useId()
    const category = useId()
    const file = useId()
    const description = useId()

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
        control,
        setValue
    } = useForm<FormValues>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        action(data)
        reset();
    }

    return (
        <form className="all-products__form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__top">
                <div className="form__productName">
                    <label htmlFor={name} className="input-text">
                        название продукта
                    </label>
                    <input
                        type="text"
                        className="input-style"
                        id={name}
                        {...register(
                            'name',
                            {
                                required: 'Поле обязательно к заполнению',
                                minLength: {value: 5, message: 'Минимум 5 символов'},
                                maxLength: {value: 20, message: 'Максимум 20 символов'}
                            }
                        )}
                    />
                    {errors?.name && <InputError message={errors.name.message}/>}
                </div>

                <div className="form__price">
                    <div className="price">
                        <label htmlFor={price} className="input-text">цена &#36;</label>
                        <input
                            type="number"
                            id={price}
                            className="input-style"
                            {...register(
                                'edit',
                                {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {value: 1, message: 'Минимум цена 1 доллар'},
                                    maxLength: {value: 5, message: 'Максимум цена 10000 доллар'}
                                }
                            )}
                        />
                        {errors?.edit && <InputError message={errors.edit.message}/>}
                    </div>

                    <div className="discount">
                        <label htmlFor={discount} className="input-text">скидка &#37;</label>
                        <input type="number"
                               className="input-style"
                               id={discount}
                               {...register(
                                   'discount',
                                   {
                                       min: 0,
                                       max: 99,
                                   }
                               )}
                        />
                        {errors?.discount && <InputError message={errors.discount.message}/>}
                    </div>
                </div>
            </div>

            <div className="form__file">
                <Controller
                    control={control}
                    name="category"
                    rules={{required: 'Поле обязательно к заполнению'}}
                    render={
                        ({
                             field: {onBlur},
                             fieldState: {error}
                         }) =>
                            <Select error={error} onBlur={onBlur} data={categories} id={category}/>
                    }
                />
                <UploadFile
                    props={{...register('images')}}
                    error={errors.images}
                    setValue={setValue}
                    id={file}
                />
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
                {errors?.description && <InputError message={errors.description.message}/>}
            </div>

            <button className="btn r-btn w-opacity form__submit">{buttonValue}</button>
        </form>
    );
};

export default ProductsForm;