import React, {useId} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {NewCountry} from "../../../../store/country/countryTypes";
import {ErrorMessage} from "@hookform/error-message";
import {InputError} from "../../../../components/UI";
import "./CountriesForm.scss";

const CountriesForm = () => {
    const initialVales = {
        country_name: ''
    }

    const countryName = useId()
    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset
    } = useForm<NewCountry>({mode: 'onBlur', defaultValues: initialVales})

    const onSubmit: SubmitHandler<NewCountry> = (data) => {
        console.log(data, 'data')

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
                        minLength: {value: 5, message: 'Минимум 5 символов'},
                        maxLength: {value: 30, message: 'Максимум 30 символов'}
                    })}
                />
                <ErrorMessage name={'country_name'}
                              errors={errors}
                              render={({message}) => <InputError message={message}/>}
                />
            </div>
            <button className="btn w-opacity r-btn form__submit">Добавить</button>
        </form>
    );
};

export default CountriesForm;