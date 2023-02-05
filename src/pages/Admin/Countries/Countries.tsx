import React from 'react';
import "./Countries.scss";
import {CountriesForm, CountriesItem} from "./index";
import {useGetAllCountriesQuery} from "../../../store/country/countryApi";
import {v4 as keyId} from "uuid"
import {Error} from "../../../components/UI";

const Countries = () => {
    const {data, isLoading, isError, error} = useGetAllCountriesQuery()

    return (
        <div className="countries">
            <CountriesForm/>
            <div className="countries__body">
                {isLoading
                    ? <p>Loading</p>
                    : isError
                        ? <Error error={error}/>
                        : data?.map(country => <CountriesItem country={country} key={keyId()}/>)
                }
            </div>
        </div>
    );
};

export default Countries;