import { useId, useCallback, memo, FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { NewCountry } from "../../../../store/country/countryTypes";
import { ErrorMessage } from "@hookform/error-message";
import { ActionLoader, InputError, ActionAlert } from "../../../../components/UI";
import "./CountriesForm.scss";
import {
    useAddCountryMutation,
    useGetSingleCountryQuery,
    useUpdateCountryMutation
} from '../../../../store/country/countryApi';

interface CountriesFormPropsType {
    buttonValue: string,
    id?: number
}

const CountriesForm: FC<CountriesFormPropsType> = ({ id, buttonValue }) => {
    const { data: country, isSuccess, isLoading: singleCountryIsLoading } =
        useGetSingleCountryQuery(id, {
            skip: !id
        })
    const [updateCountry,
        {
            isError: countryIsError,
            isLoading: countryIsLoading,
            isSuccess: countryIsSuccess,
            error: countryError
        }] = useUpdateCountryMutation()
    const [addCountry,
        {
            isError: addIsError, isLoading: addIsLoading,
            isSuccess: addIsSuccess, error: addError
        }] = useAddCountryMutation()

    const countryName = useId()

    const initialVales = {
        country_name: isSuccess ? country.country_name : ''
    }

    const {
        register,
        formState: { errors, isDirty },
        handleSubmit,
        reset
    } = useForm<NewCountry>({ mode: 'onBlur', defaultValues: initialVales })

    const onSubmit: SubmitHandler<NewCountry> = useCallback((data) => {
        country ? updateCountry(data) : addCountry(data)
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
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 30, message: 'Максимум 30 символов' }
                        })}
                    />
                    <ErrorMessage name={'country_name'}
                        errors={errors}
                        render={({ message }) => <InputError message={message} />}
                    />
                </div>
                {country ? <button disabled={!isDirty}
                    className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
                    {buttonValue}</button>
                    : <button className={`btn r-btn w-opacity form__submit`}>{buttonValue}</button>
                }
            </form>
            {addIsLoading && <ActionLoader />}
            {/*{addIsError && <ActionAlert error={addError} message='Error on add'/>}*/}
            {/*{addIsSuccess && <ActionAlert success={true} message='Added successfully'/>}*/}
        </>
    );
};

export default CountriesForm;