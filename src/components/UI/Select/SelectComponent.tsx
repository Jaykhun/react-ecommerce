import React, {FC, useCallback} from 'react';
import AsyncSelect from "react-select/async";
import makeAnimated from 'react-select/animated';
import {ControllerRenderProps, FieldError} from "react-hook-form";
import SelectLoader from "./SelectLoader";
import "./SelectComponent.scss";

interface SelectProps {
    data?: any,
    id: string,
    multi: boolean
    field: ControllerRenderProps | any,
    errors?: FieldError
}

const SelectComponent: FC<SelectProps> = ({data, id, multi, field, errors}) => {
    const animatedComponents = makeAnimated()

    const {name, onBlur, onChange, value} = field

    const loadOptions = useCallback(
        (searchValue: string, callback: any) => {
            const filteredOptions = data?.filter((option : any) =>
                option.name.toLowerCase().includes(searchValue.toLowerCase())
            )

            callback(filteredOptions)
        }, [data])

    return (
        <>
            {data ? <div className="select">
                <label htmlFor={name} className="custom-select__label">Выберите категории</label>
                <AsyncSelect
                    id={id}
                    name={name}
                    classNamePrefix="custom-select"
                    placeholder={false}
                    closeMenuOnSelect={multi}
                    components={animatedComponents}
                    onBlur={onBlur}
                    isMulti={multi}
                    cacheOptions
                    defaultOptions
                    loadOptions={loadOptions}
                    getOptionValue={value => value.name}
                    getOptionLabel={value => value.name}
                    value={data?.find((c: any) => c.name === value.name)}
                    onChange={newValue => onChange?.(newValue)}
                />
            </div> : <SelectLoader/>}
        </>
    );
};

export default SelectComponent;