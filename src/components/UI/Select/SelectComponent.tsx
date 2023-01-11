import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "./SelectComponent.scss";

const SelectComponent = () => {
    const animatedComponents = makeAnimated();

    const options = [
        {value: 'computer', label: 'Computer'},
        {value: 'laptop', label: 'Laptop'},
        {value: 'phone', label: 'Phone'},
    ]

    return (
        <div className="select">
            <label htmlFor="select" className="custom-select__label">Выберите категории</label>
            <Select
                id="select"
                classNamePrefix="custom-select"
                options={options}
                placeholder={false}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
            />
        </div>
    );
};

export default SelectComponent;