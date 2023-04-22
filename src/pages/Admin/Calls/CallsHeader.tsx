const CallsHeader = () => {
    return (
        <>
            <div className="calls__title">Звонки</div>

            <div className="calls__list list-calls">
                <div className="list-calls__item">Пользователь</div>
                <div className="list-calls__item">Сообщение</div>
                <div className="list-calls__item">Номер телефона</div>
                <div className="list-calls__item">Время</div>
                <div className="list-calls__item">Действие</div>
            </div>
        </>
    )
}

export default CallsHeader