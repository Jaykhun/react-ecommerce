import { CountriesForm, CountriesItem, CountriesLoader } from "./index";
import { useGetAllCountriesQuery } from "../../../store/api/country/countryApi";
import { v4 as keyId } from "uuid"
import { Error, Message } from "../../../components/UI";
import "./Countries.scss";

const Countries = () => {
    const { data, isLoading, isError, error } = useGetAllCountriesQuery()
    window.scrollTo(0, 0);

    return (
        <div className="countries">
            <CountriesForm buttonValue='Добавить' />
            <div className="countries__title title">Страны</div>
            <div className="countries__body">
                {
                    isLoading ?
                        <CountriesLoader />
                        : isError
                            ? <Error error={error} />
                            : data?.length === 0
                                ? <Message value="нет продуктов" />
                                : data?.map(country => <CountriesItem country={country} key={keyId()} />)
                }
            </div>
        </div>
    );
};

export default Countries;