import { Button, Message, Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { countryApi } from '@/store/api/country/countryApi'
import { ErrorMessage } from '@hookform/error-message'
import { ICountry } from '@models/countryType'
import { Notify } from 'notiflix'
import { SubmitHandler, useForm } from 'react-hook-form'
import './CountriesAdd.scss'

const CountriesAdd = () => {
    const { isOpenAddModal } = useTypedSelector(state => state.countrySlice)
    const { closeCountryAddModal } = useActions()
    const { register, formState: { errors }, handleSubmit, reset } = useForm<ICountry>({ mode: 'onBlur' })

    const [addCountry, result] = countryApi.useAddCountryMutation()

    const onSubmit: SubmitHandler<ICountry> = async (data) => {
        try {
            await addCountry(data).unwrap()
            Notify.success(`${data.country_name} успешно добавлен`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
            reset()
            closeCountryAddModal()
        }

        catch (e: any) {
            Notify.failure(`Ошибка при добаление ${data.country_name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    const modalState = {
        isLoading: result.isLoading
    }

    return (
        <Modal isOpen={isOpenAddModal} state={modalState} handleClose={closeCountryAddModal}>
            <div className='countries-add'>
                <div className="countries-add__body">
                    <div className="countries-add__title">Добавить страну</div>

                    <form className="countries-add__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="countries-add__country">
                            <label htmlFor="country" className='input__label'>Название стран</label>

                            <input type="text"
                                id='country'
                                className='input__style'
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

                        <Button hoverEffect>Добавить</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default CountriesAdd