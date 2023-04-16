import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchCategory } from '@/models/categoryTypes'
import { AddProduct } from '@/models/productTypes'
import { categoryApi, productApi } from '@/store/api'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from "react-select/async"
import './ProductsAdd.scss'

const ProductsAdd = () => {
    const { closeProductAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.productSlice)
    const { register, formState: { errors }, control, handleSubmit } = useForm<AddProduct>({ mode: 'onBlur' })

    const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError, error: categoriesError } = categoryApi.useGetAllCategoriesQuery()
    const [addProduct, result] = productApi.useAddProductMutation()

    const modalState = {
        isLoading: result.isLoading
    }

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = categories?.filter((option: FetchCategory) =>
            option.name.toLowerCase().includes(searchValue.toLowerCase())
        )

        callback(filteredOptions)
    }

    const onSubmit: SubmitHandler<AddProduct> = async (data) => {
        try {
            await addProduct(data).unwrap()
            Notify.success(`${data.product.name} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeProductAddModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добаление ${data.product.name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeProductAddModal}>
            <div className='products-add'>
                <div className="products-add__body">
                    <div className="products-add__title">Добавить продукт</div>

                    <form className="products-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="products-add__name">
                            <label htmlFor='name' className='input__label'>Название</label>
                            <input type='text' id='name' className='input__style'
                                {...register('product.name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 20, message: 'Максимум 20 символов' },
                                })} />

                            <ErrorMessage name='product.name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__price">
                            <label htmlFor='price' className='input__label'>Цена $</label>
                            <input type='number' id='price' className='input__style'
                                {...register('product.price', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 1, message: 'Минимум 1 доллар' },
                                })} />

                            <ErrorMessage name='product.price' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__desc">
                            <label htmlFor='description' className='input__label'>Описание</label>
                            <textarea id='description' className='input__style'
                                {...register('product.description', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 200, message: 'Максимум 200 символов' },
                                })} />

                            <ErrorMessage name='product.description' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__category">
                            <label htmlFor='category' className='input__label'>Категории</label>
                            {categoriesIsLoading
                                ? <Message formError='Идет загрузка категории...' />
                                : categoriesIsError
                                    ? <Message error={categoriesError} formError='Не удалось загузить категории' />
                                    : <Controller
                                        control={control}
                                        {...register('product.category_id', {
                                            required: 'Поле обязательно к заполнению',
                                        })}
                                        render={({ field }) => ((
                                            <AsyncSelect
                                                id='category'
                                                classNamePrefix='select-styles'
                                                components={makeAnimated()}
                                                placeholder={false}
                                                defaultOptions
                                                loadOptions={loadOptions}
                                                onBlur={field.onBlur}
                                                getOptionValue={value => value.name}
                                                getOptionLabel={value => value.name}
                                                onChange={(newValue: any) => field.onChange(newValue.id)}
                                                value={categories?.find((value: FetchCategory) => value.id === field.value)}
                                            />
                                        ))}
                                    />
                            }

                            <ErrorMessage name='product.category_id' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__quantity">
                            <label htmlFor='quantity' className='input__label'>Количество</label>
                            <input type='number' id='quantity' className='input__style'
                                {...register('product.quantity', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 1, message: 'Минимум 1 количество' },
                                })} />

                            <ErrorMessage name='product.quantity' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__discount">
                            <label htmlFor='discount' className='input__label'>Скидка %</label>
                            <input type='number' value={0} id='discount' className='input__style'
                                {...register('product.discount', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 0, message: 'Минимум 1 процентов' },
                                    max: { value: 100, message: 'Максимум 100 процентов' },
                                })} />

                            <ErrorMessage name='product.discount' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-add__image">
                            <label htmlFor='image' className='input__label'>Картинка</label>
                            <input type='text' id='image' className='input__style'
                                {...register('product_images.0.image_path', {
                                    required: 'Поле обязательно к заполнению',
                                })} />

                            <ErrorMessage name='product_images.0.image_path' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default ProductsAdd