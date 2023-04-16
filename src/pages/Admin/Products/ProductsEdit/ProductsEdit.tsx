import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchCategory, } from '@/models/categoryTypes'
import { EditProduct } from '@/models/productTypes'
import { categoryApi, productApi } from '@/store/api'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'
import './ProductsEdit.scss'

const ProductsEdit = () => {
    const { closeProductEditModal } = useActions()
    const { isOpenEditModal, productId } = useTypedSelector(state => state.productSlice)
    const { register, formState: { errors, isDirty }, reset, control, handleSubmit } = useForm<EditProduct>({ mode: 'onBlur' })

    const { data: product, isFetching, isError: productIsError, error: productError } = productApi.useGetSingleProductQuery(productId, { skip: !productId })
    const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError, error: categoriesError } = categoryApi.useGetAllCategoriesQuery()
    const [editProduct, result] = productApi.useEditProductMutation()

    const modalState = {
        isLoading: isFetching || result.isLoading,
        isError: productIsError || result.isError,
        error: productError || result.error
    }

    useEffect(() => {
        reset()
    }, [product])

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = categories?.filter((option: FetchCategory) =>
            option.name.toLowerCase().includes(searchValue.toLowerCase())
        )

        callback(filteredOptions)
    }

    const onSubmit: SubmitHandler<EditProduct> = async (data) => {
        console.log(data)
        try {
            await editProduct({ data: data, id: productId }).unwrap()
            Notify.success(`${product?.name} успешно изменен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeProductEditModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при изменение ${product?.name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeProductEditModal}>
            <div className='products-edit'>
                <div className="products-edit__body">
                    <div className="products-edit__title">Изменить данные</div>

                    <form className="products-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="products-edit__name">
                            <label htmlFor='name' className='input__label'>Название</label>
                            <input type='text' id='name' className='input__style'
                                defaultValue={product?.name}
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 40, message: 'Максимум 40 символов' },
                                })} />

                            <ErrorMessage name='name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>


                        <div className="products-edit__price">
                            <label htmlFor='price' className='input__label'>Цена $</label>
                            <input type='number' id='price' className='input__style'
                                defaultValue={product?.price}
                                {...register('price', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 1, message: 'Минимум 1 доллар' },
                                })} />

                            <ErrorMessage name='price' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-edit__desc">
                            <label htmlFor='description' className='input__label'>Описание</label>
                            <textarea id='description' className='input__style'
                                defaultValue={product?.description}
                                {...register('description', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 200, message: 'Максимум 200 символов' },
                                })} />

                            <ErrorMessage name='description' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-edit__category">
                            <label htmlFor='category' className='input__label'>Категории</label>
                            {categoriesIsLoading
                                ? <Message formError='Идет загрузка категории...' />
                                : categoriesIsError
                                    ? <Message error={categoriesError} formError='Не удалось загузить категории' />
                                    : <Controller
                                        control={control}
                                        {...register('category_id', {
                                            required: 'Поле обязательно к заполнению',
                                        })}
                                        render={({ field }) => ((
                                            <AsyncSelect
                                                id='category'
                                                classNamePrefix='select-styles'
                                                components={makeAnimated()}
                                                placeholder={false}
                                                defaultValue={product?.category}
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
                        </div>

                        <div className="products-edit__quantity">
                            <label htmlFor='quantity' className='input__label'>Количество</label>
                            <input type='number' id='quantity' className='input__style'
                                defaultValue={product?.quantity}
                                {...register('quantity', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 1, message: 'Минимум 1 количество' },
                                })} />

                            <ErrorMessage name='quantity' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="products-edit__discount">
                            <label htmlFor='discount' className='input__label'>Скидка %</label>
                            <input type='number' id='discount' className='input__style'
                                defaultValue={product?.quantity}
                                {...register('discount', {
                                    required: 'Поле обязательно к заполнению',
                                    min: { value: 1, message: 'Минимум 1 процентов' },
                                    max: { value: 100, message: 'Максимум 100 процентов' },
                                })} />

                            <ErrorMessage name='discount' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <Button hoverEffect disabled={!isDirty}>Изменить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default ProductsEdit