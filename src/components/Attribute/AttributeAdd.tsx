import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { AddAttribute } from '@/models/attributeTypes'
import attributeApi from '@/store/api/attribute'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './Attribute.scss'

interface AddVariantsType {
    element: JSX.Element,
    id: string
}

const AttributeAdd = () => {
    const { closeAttributeAddModal } = useActions()
    const { isOpenAddModal } = useTypedSelector(state => state.attributeSlice)
    const { categoryId } = useTypedSelector(state => state.categorySlice)
    const [variants, setVariants] = useState<AddVariantsType[]>([])
    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm<AddAttribute>({ mode: 'onBlur' })

    const [addAttribute, result] = attributeApi.useAddAttributeMutation()

    const modalState = {
        isLoading: result.isLoading,
        isError: result.isError,
        error: result.error
    }

    const VALIDATION_RULES = {
        required: 'Поле обязательно к заполнению',
        minLength: { value: 3, message: 'Минимум 3 символов' },
        maxLength: { value: 20, message: 'Максимум 20 символов' }
    }

    const handleDeleteVariant = (id: string) => {
        setVariants(variants.filter(variant => Number(variant.id) !== Number(id)))
    }

    const handleAddVariant = () => {
        const currentId = String(Date.now())
        const index = variants.length
        setVariants([...variants, {
            id: currentId, element: <div className="variants-add__item" key={currentId}>
                <label htmlFor={currentId} className='input__label'>Вариант</label>
                <div className="variants-add__content">
                    <div className="variants-add__input">
                        <input type='text' id={currentId} className='input__style'
                            {...register(`variants.${index}.value`, VALIDATION_RULES)} />

                        <ErrorMessage name={`variants.${index}.value`} errors={errors}
                            render={(data) => <Message formError={data.message} />}
                        />
                    </div>

                    <div className="variants-add__delete" onClick={() => handleDeleteVariant(currentId)}></div>
                </div>
            </div>
        }
        ])
    }

    const onSubmit: SubmitHandler<AddAttribute> = async (data) => {
        const attribute = {
            attribute: {
                attribute_name: data.attribute.attribute_name,
                category_id: categoryId
            },
            variants: data.variants
        }
        console.log(attribute)

        try {
            await addAttribute(attribute).unwrap()
            Notify.success(`${data.attribute.attribute_name} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            closeAttributeAddModal()
            reset()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добавление ${data.attribute.attribute_name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeAttributeAddModal}>
            <div className='attribute-add'>
                <div className="attribute-add__body">
                    <div className="attribute-add__title">Добавить атрибут</div>

                    <form className="attribute-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="attribute-add__name">
                            <label htmlFor='name' className='input__label'>Название</label>
                            <input type='text' id='name' className='input__style'
                                {...register('attribute.attribute_name', VALIDATION_RULES)} />

                            <ErrorMessage name='attribute.attribute_name' errors={errors}
                                render={(data) => <Message formError={data.message} />}
                            />
                        </div>
                        <div className="attribute-add__variants variants-add">
                            <div className="variants-add__variant">
                                <div className="variants-add__item">
                                    <label htmlFor='' className='input__label'>Вариант</label>
                                    <div className="variants-add__content">
                                        <div className="variants-add__input">
                                            <input type='text' id='' className='input__style'
                                                {...register(`variants.${0}.value`, VALIDATION_RULES)} />

                                            <ErrorMessage name={`variants.${0}.value`} errors={errors}
                                                render={(data) => <Message formError={data.message} />}
                                            />
                                        </div>

                                        <div className="variants-add__delete" onClick={() => handleDeleteVariant('0')}></div>
                                    </div>
                                </div>
                                {variants.map(variant => variant.element)}
                            </div>

                            <div className="variants-add__btn" onClick={handleAddVariant}>Добавить вариант</div>
                        </div>

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default AttributeAdd