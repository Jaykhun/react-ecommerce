import React, {FC, useCallback} from 'react';
import "./SelectComponent.scss";
import AsyncSelect from "react-select/async";
import makeAnimated from 'react-select/animated';
import {ICategory} from "../../../store/category/categoryTypes";
import InputError from "../InputError";

interface SelectProps {
    error: any,
    onBlur: any,
    data?: ICategory[],
    id: string,
    value: string,
    name: string,
    onChange: any
}

const SelectComponent: FC<SelectProps> = ({error, onBlur, onChange, data, id, value, name}) => {
    const animatedComponents = makeAnimated()

    const loadOptions = useCallback(
        (searchValue: string, callback: any) => {
            const filteredOptions = data?.filter((option) =>
                option.name.toLowerCase().includes(searchValue.toLowerCase())
            )

            callback(filteredOptions)
        }, [data])

    return (
        <>
            {data && <div className="select">
                <label htmlFor={name} className="custom-select__label">Выберите категории</label>
                <AsyncSelect
                    id={id}
                    name={name}
                    classNamePrefix="custom-select"
                    placeholder={false}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onBlur={onBlur}
                    isMulti
                    cacheOptions
                    defaultOptions
                    loadOptions={loadOptions}
                    getOptionValue={value => value.name}
                    getOptionLabel={value => value.name}
                    value={data?.find(c => c.name === value)}
                    onChange={(newValue: any) => onChange(newValue.name)}
                />
                {error && <InputError message={error.message}/>}
            </div>}
        </>
    );
};

export default SelectComponent;