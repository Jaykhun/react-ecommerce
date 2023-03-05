import React from 'react';
import "./Calls.scss";
import {useGetAllCallBacksQuery} from "../../../store/api/callBack/callBack";
import {Error, Message} from "../../../components/UI";
import {CallsLoader, CallsItem} from "./index";

const Calls = () => {
    const {data: calls, isLoading, isError, error} = useGetAllCallBacksQuery()
    window.scrollTo(0, 0);

    return (
        <div className="calls">
            <div className="calls__title title">Звонки</div>

            <ul className="calls__header header">
                <li className="header__name input-text">Ф.И.О.</li>
                <li className="header__name input-text">Номер телефона</li>
                <li className="header__name input-text">Время</li>
                <li className="header__name input-text">Обращение</li>
                <li className="header__name input-text calls__name">Действие</li>
            </ul>

            <div className="calls__body">
                {
                    isLoading
                        ? <CallsLoader/>
                        : isError
                            ? <Error error={error}/>
                            : calls?.length
                                ? calls?.map(call => <CallsItem call={call} key={call.id}/>)
                                : <Message value="Нет Звонков"/>
                }
            </div>
        </div>
    );
};

export default Calls;