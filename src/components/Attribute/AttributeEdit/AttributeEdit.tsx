import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { EditAttribute } from '@/models/attributeTypes'
import { FetchCategory } from '@/models/categoryTypes'
import attributeApi from '@/store/api/attribute'
import categoryApi from '@/store/api/category'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import makeAnimated from 'react-select/animated'
import AsyncSelect from 'react-select/async'
import './AttributeEdit.scss'

const AttributeEdit = () => {
  const { closeAttributeEditModal } = useActions()
  const { attributeId, isOpenEditModal } = useTypedSelector(state => state.attributeSlice)
  const { register, formState: { errors, isDirty }, handleSubmit, reset, control } = useForm<EditAttribute>({ mode: 'onBlur' })

  const { data: attribute, isFetching, isError: attributeIsError, error: attributeError } = attributeApi.useGetSingleAttributeQuery(attributeId, { skip: !attributeId })
  const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError, error: categoriesError } = categoryApi.useGetAllCategoriesQuery()
  const [editAttribute, result] = attributeApi.useEditAttributeMutation()

  const modalState = {
    isLoading: isFetching || result.isLoading,
    isError: attributeIsError || result.isError,
    error: attributeError || result.error
  }

  useEffect(() => {
    reset()
  }, [attribute])

  const loadOptions = (searchValue: string, callback: any) => {
    const filteredOptions = categories?.filter((option: FetchCategory) =>
      option.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    callback(filteredOptions)
  }

  const category = categories?.find(category => category.id === attribute?.category_id)

  const onSubmit: SubmitHandler<EditAttribute> = async (data) => {
    const newAttribute = {
      attribute_name: data.attribute_name,
      category_id: data.category_id || Number(category?.id)
    }

    try {
      await editAttribute({ data: newAttribute, id: attributeId }).unwrap()
      Notify.success(`${attribute?.attribute_name} успешно изменен`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
      closeAttributeEditModal()
    }

    catch (e: any) {
      Notify.failure(`Ошибка при изменение ${attribute?.attribute_name}, статус: ${e.status}`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
    }
  }

  return (
    <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeAttributeEditModal}>
      <div className='attribute-edit'>
        <div className="attribute-edit__body">
          <div className="attribute-edit__title">Изменить данные</div>
          <form className="attribute-edit__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="attribute-edit__name">
              <label htmlFor='name' className='input__label'>Название</label>
              <input type='text' id='name' className='input__style'
                defaultValue={attribute?.attribute_name}
                {...register('attribute_name', {
                  required: 'Поле обязательно к заполнению',
                  minLength: { value: 3, message: 'Минимум 3 символов' },
                  maxLength: { value: 20, message: 'Максимум 20 символов' }
                })} />

              <div className="categories-edit__parent">
                <label htmlFor='name' className='input__label'>Родительский</label>
                {categoriesIsLoading
                  ? <Message formError='Идет загрузка категории...' />
                  : categoriesIsError
                    ? <Message error={categoriesError} formError='Не удалось загузить категории' />
                    : <Controller
                      control={control}
                      {...register('category_id')}
                      render={({ field }) => ((
                        <AsyncSelect
                          id='category'
                          classNamePrefix='select-styles'
                          components={makeAnimated()}
                          placeholder={false}
                          defaultValue={category}
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

              <ErrorMessage name='attribute_name' errors={errors}
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

export default AttributeEdit