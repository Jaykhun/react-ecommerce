import React, {FC} from 'react';
import "./CountriesItem.scss";
import {ICountry} from "../../../../store/country/countryTypes";

interface CountriesItemPropsType {
    country: ICountry
}

const CountriesItem: FC<CountriesItemPropsType> = ({country}) => {
    return (
        <div>
            <p>{country.country_name}</p>
        </div>
    );
};

export default CountriesItem;