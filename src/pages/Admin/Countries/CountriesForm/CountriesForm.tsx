import {useId, useCallback, FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {NewCountry} from "../../../../store/country/countryTypes";
import {ErrorMessage} from "@hookform/error-message";
import {ActionLoader, InputError, ActionAlert} from "../../../../components/UI";
import "./CountriesForm.scss";
import {
    useAddCountryMutation,
    useGetSingleCountryQuery,
    useUpdateCountryMutation
} from '../../../../store/country/countryApi';
import {useActions} from "../../../../hooks/useActions";

interface CountriesFormPropsType {
    buttonValue: string,
    id?: number
}

const CountriesForm: FC<CountriesFormPropsType> = ({id, buttonValue}) => {
    const [isAction, setAction] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [error, setError] = useState<any>()

    const {data: country, isSuccess : singCountryIsSuccess} =
        useGetSingleCountryQuery(id, {
            skip: !id
        })
    const [updateCountry,
        {
            isError: updateIsError,
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            error: updateError
        }] = useUpdateCountryMutation()
    const [addCountry,
        {
            isError: addIsError, isLoading: addIsLoading,
            isSuccess: addIsSuccess, error: addError
        }] = useAddCountryMutation()

    const {onCountryEditPopupClick} = useActions()
    const countryName = useId()
    const initialVales = {
        country_name: singCountryIsSuccess ? country.country_name : ''
    }

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset
    } = useForm<NewCountry>({mode: 'onBlur', defaultValues: initialVales})

    const onSubmit: SubmitHandler<NewCountry> = useCallback((data) => {
        if(country){
            updateCountry({id: id, country_name: data.country_name})
            onCountryEditPopupClick()
            updateIsLoading && setAction(prevState => !prevState)
            updateIsError && setError(updateError)
            updateIsSuccess && setSuccess(prevState => !prevState)
        }

        else {
            addCountry(data)
            addIsLoading && setAction(prevState => !prevState)
            addIsError && setError(addError)
            addIsSuccess && setSuccess(prevState => !prevState)
        }
        reset()
    }, [])

    return (
        <>
            <form className="countries-form form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__name">
                    <label htmlFor={countryName} className="input-text">Название страны</label>
                    <input
                        type="text"
                        id={countryName}
                        className="input-style"
                        {...register("country_name", {
                            required: 'Поле обязательно к заполнению',
                            minLength: {value: 5, message: 'Минимум 5 символов'},
                            maxLength: {value: 30, message: 'Максимум 30 символов'}
                        })}
                    />
                    <ErrorMessage name={'country_name'}
                                  errors={errors}
                                  render={({message}) => <InputError message={message}/>}
                    />
                </div>
                {country ? <button disabled={!isDirty}
                                   className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
                        {buttonValue}</button>
                    : <button className={`btn r-btn w-opacity form__submit`}>{buttonValue}</button>
                }
            </form>
            {isAction && <ActionLoader/>}
            {/*{error &&  <ActionAlert message={'NotFound'} error={error}/>}*/}
            {/*{isSuccess && <ActionAlert message={'Success'} success={isSuccess}/>}*/}
        </>
    );
};

export default CountriesForm;