import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FetchCategory, MutationCategoryType } from '@/models/categoryTypes'
import categoryApi from '@/store/api/category'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'

const CategoriesAdd = () => {
    const { closeCategoryAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.categorySlice)
    const { register, formState: { errors }, control, handleSubmit, reset } = useForm<MutationCategoryType>({ mode: 'onBlur' })

    const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError, error: categoriesError } = categoryApi.useGetAllCategoriesQuery()
    const [addCategory, result] = categoryApi.useAddCategoryMutation()

    const modalState = {
        isLoading: result.isLoading,
        isError: result.isError,
        error: result.error
    }

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = categories?.filter((option: FetchCategory) =>
            option.name.toLowerCase().includes(searchValue.toLowerCase())
        )

        callback(filteredOptions)
    }

    const onSubmit: SubmitHandler<MutationCategoryType> = async (data) => {
        try {
            await addCategory(data).unwrap()
            Notify.success(`${data.name} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeCategoryAddModal()
            reset()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добавление ${data.name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }
    
    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeCategoryAddModal}>
            <div className='categories-edit'>
                <div className="categories-edit__body">
                    <div className="categories-edit__title">Изменить данные</div>

                    <form className="categories-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="categories-edit__name">
                            <label htmlFor='name' className='input__label'>Название</label>
                            <input type='text' id='name' className='input__style'
                                {...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 5, message: 'Минимум 5 символов' },
                                    maxLength: { value: 20, message: 'Максимум 20 символов' },
                                })} />

                            <ErrorMessage name='name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>

                        <div className="categories-edit__parent">
                            <label htmlFor='name' className='input__label'>Родительский</label>
                            {categoriesIsLoading
                                ? <Message formError='Идет загрузка категории...' />
                                : categoriesIsError
                                    ? <Message error={categoriesError} formError='Не удалось загузить категории' />
                                    : <Controller
                                        control={control}
                                        {...register('parent_category_id')}
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
                                    />}
                        </div>

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default CategoriesAdd