import React, {FC} from 'react';
import "./SelectComponent.scss";
import AsyncSelect from "react-select/async";
import makeAnimated from 'react-select/animated';
import {ICategory} from "../../../store/category/categoryTypes";
import InputError from "../InputError";

interface SelectProps {
    error: any,
    onBlur: any,
    data?: ICategory[],
    id: string
}

const SelectComponent: FC<SelectProps> = ({error, onBlur, data, id}) => {
    const animatedComponents = makeAnimated()

    const loadOptions = (searchValue: string, callback: any) => {
        const filteredOptions = data?.filter((option) =>
            option.name.toLowerCase().includes(searchValue.toLowerCase())
        )

        callback(filteredOptions)
    }

    return (
        <>
            {data && <div className="select">
                <label htmlFor="select" className="custom-select__label">Выберите категории</label>
                <AsyncSelect
                    id={id}
                    classNamePrefix="custom-select"
                    placeholder={false}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onBlur={onBlur}
                    isMulti
                    cacheOptions
                    defaultOptions
                    loadOptions={loadOptions}
                />

                {error && <InputError message={error.message}/>}
            </div>}
        </>
    );
};

export default SelectComponent;