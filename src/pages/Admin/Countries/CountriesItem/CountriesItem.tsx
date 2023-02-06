import React, { FC, useCallback, useEffect } from 'react';
import "./CountriesItem.scss";
import { ICountry } from "../../../../store/country/countryTypes";
import { useDeleteCountryMutation } from '../../../../store/country/countryApi';
import { ActionAlert, ActionLoader } from '../../../../components/UI';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

interface CountriesItemPropsType {
    country: ICountry
}

const CountriesItem: FC<CountriesItemPropsType> = ({ country }) => {
    const [deleteCountry, { isError, isLoading, isSuccess, error }] = useDeleteCountryMutation()
    const { country_name, id } = country

    const handleDelete = () => {
        deleteCountry(id)
    }

    // console.log(isError, isSuccess);

    return (
        <>
            <div className='countries__item'>
                <div className="countries__name">{country_name}</div>
                <div className="countries__action">
                    <div className="countries__edit action-edit"></div>
                    <div className="countries__delete action-delete" onClick={handleDelete}></div>
                </div>
            </div>
            {isLoading && <ActionLoader />}
            {isError && <ActionAlert message={'Error on Delete'} error={error} />}
            {isSuccess && <ActionAlert message={'Deleted Successfully'} success={true} />}
        </>
    );
};

export default CountriesItem;