import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ICountry } from '@/models/countryTypes'
import countryApi from '@/store/api/country'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './CountriesEdit.scss'

const CountriesEdit = () => {
    const { closeCountryEditModal } = useActions()
    const { isOpenEditModal, countryId } = useTypedSelector(state => state.countrySlice)
    const { register, formState: { errors, isDirty }, reset, handleSubmit } = useForm<ICountry>({ mode: 'onBlur' })

    const { data: country, isFetching, isError, error } = countryApi.useGetSingleCountryQuery(countryId, { skip: !countryId })
    const [countryEdit, result] = countryApi.useEditCountryMutation()

    const modalState = {
        isLoading: result.isLoading || isFetching,
        isError: result.isError || isError,
        error: result.error || error
    }

    useEffect(() => {
        reset()
    }, [country])

    const onSubmit: SubmitHandler<ICountry> = async (data) => {
        try {
            await countryEdit({ data: data, id: countryId }).unwrap()
            Notify.success(`${country?.country_name} успешно изменен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            closeCountryEditModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при изменение ${country?.country_name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenEditModal} state={modalState} handleClose={closeCountryEditModal}>
            <div className='countries-edit'>
                <div className="countries-edit__body">
                    <div className="countries-edit__title">Изменить данные</div>

                    <form className="countries-edit__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="countries-edit__country">
                            <label htmlFor="country" className='input__label'>Название стран</label>

                            <input type="text"
                                id='country'
                                className='input__style'
                                defaultValue={country?.country_name}
                                {...register('country_name', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: { value: 3, message: 'Минимум 3 символов' },
                                    maxLength: { value: 20, message: 'Максимум 20 символов' }
                                })}
                            />

                            <ErrorMessage name='country_name'
                                errors={errors}
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

export default CountriesEdit