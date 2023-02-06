import React, { useId } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { NewCountry } from "../../../../store/country/countryTypes";
import { ErrorMessage } from "@hookform/error-message";
import { ActionLoader, InputError, ActionAlert } from "../../../../components/UI";
import "./CountriesForm.scss";
import { useAddCountryMutation } from '../../../../store/country/countryApi';

const CountriesForm = () => {
    const [addCountry, { isError: addIsError, isLoading: addIsLoading, isSuccess: addIsSucces, error: addError }] = useAddCountryMutation()
    const countryName = useId()
    const initialVales = {
        country_name: ''
    }

    const {
        register,
        formState: { errors, isDirty },
        handleSubmit,
        reset
    } = useForm<NewCountry>({ mode: 'onBlur', defaultValues: initialVales })

    const onSubmit: SubmitHandler<NewCountry> = (data) => {
        addCountry(data)
        return addIsSucces ? reset() : ''
    }

    return (
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
            <button className="btn w-opacity r-btn form__submit">Добавить</button>
            {addIsLoading && <ActionLoader />}
            {addIsError && <ActionAlert error={addError} message='Error on add' />}
            {addIsSucces && <ActionAlert success={true} message='Success added' />}
        </form>
    );
};

export default CountriesForm;