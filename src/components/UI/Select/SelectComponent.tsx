import React, {FC} from 'react';
import "./SelectComponent.scss";
import AsyncSelect from "react-select/async";
import makeAnimated from 'react-select/animated';
import {ICategory} from "../../../store/category/categoryType";

interface SelectProps {
    error: any,
    onBlur: any,
    data?: ICategory[]
}

const SelectComponent: FC<SelectProps> = ({error, onBlur, data}) => {
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
                    id="select"
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

                {error &&
                    <span className="input-error">{error.message}</span>}
            </div>}
        </>
    );
};

export default SelectComponent;