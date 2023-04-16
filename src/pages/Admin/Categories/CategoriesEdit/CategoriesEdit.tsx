import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { categoryApi } from '@/store/api'
import { ErrorMessage } from '@hookform/error-message'
import { FetchCategory, MutationCategoryType } from '@models/categoryTypes'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'
import './CategoriesEdit.scss'

const CategoriesEdit = () => {
  const { closeCategoryEditModal } = useActions()
  const { isOpenEditModal, categoryId } = useTypedSelector(state => state.categorySlice)
  const { register, formState: { errors, isDirty }, control, handleSubmit, reset } = useForm<MutationCategoryType>({ mode: 'onBlur' })

  const { data: category, isFetching, isError: categoryIsError, error: categoryError } = categoryApi.useGetSingleCategoryQuery(categoryId, { skip: !categoryId })
  const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError, error: categoriesError } = categoryApi.useGetAllCategoriesQuery()
  const [editCategory, result] = categoryApi.useEditCategoryMutation()

  const modalState = {
    isLoading: isFetching || result.isLoading,
    isError: categoryIsError || result.isError,
    error: categoryError || result.error
  }

  useEffect(() => {
    reset()
  }, [category])

  const loadOptions = (searchValue: string, callback: any) => {
    const filteredOptions = categories?.filter((option: FetchCategory) =>
      option.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    callback(filteredOptions)
  }

  const onSubmit: SubmitHandler<MutationCategoryType> = async (data) => {
    try {
      await editCategory({ data: data, id: categoryId }).unwrap()
      Notify.success(`${category?.name} успешно изменен`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
      closeCategoryEditModal()
    }

    catch (e: any) {
      Notify.failure(`Ошибка при изменение ${category?.name}, статус: ${e.status}`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
    }
  }

  return (
    <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeCategoryEditModal}>
      <div className='categories-edit'>
        <div className="categories-edit__body">
          <div className="categories-edit__title">Изменить данные</div>

          <form className="categories-edit__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="categories-edit__name">
              <label htmlFor='name' className='input__label'>Название</label>
              <input type='text' id='name' className='input__style'
                defaultValue={category?.name}
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
                        defaultValue={category?.parent_category}
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

            <Button hoverEffect disabled={!isDirty}>Изменить</Button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default CategoriesEdit