import React, {FC} from 'react';
import "./CountriesItem.scss";
import {ICountry} from "../../../../store/country/countryTypes";
import {useDeleteCountryMutation} from '../../../../store/country/countryApi';
import {ActionAlert, ActionLoader} from '../../../../components/UI';
import {useActions} from "../../../../hooks/useActions";

interface CountriesItemPropsType {
    country: ICountry
}

const CountriesItem: FC<CountriesItemPropsType> = ({country}) => {
    const {onCountryEditPopupClick, countryEdit} = useActions()

    const [deleteCountry, {isError, isLoading, isSuccess, error}] = useDeleteCountryMutation()
    const {country_name, id} = country

    const handleDelete = async () => {
        await deleteCountry(id)
    }

    const handleEdit = () => {
        onCountryEditPopupClick()
        countryEdit(id)
    }

    return (
        <>
            <div className='countries__item'>
                <div className="countries__name">{country_name}</div>
                <div className="countries__action">
                    <div className="countries__edit action-edit" onClick={handleEdit}></div>
                    <div className="countries__delete action-delete" onClick={handleDelete}></div>
                </div>
            </div>
            {isLoading && <ActionLoader/>}
            {isError && <ActionAlert message={'NotFound on Delete'} error={error}/>}
            {isSuccess && <ActionAlert message={'Deleted Successfully'} success={true}/>}
        </>
    );
};

export default CountriesItem;