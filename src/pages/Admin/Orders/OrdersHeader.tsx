const OrdersHeader = () => {
    return (
        <>
            <div className="orders__title">Заказы</div>

            <div className="orders__list list-orders">
                <div className="list-orders__item">User</div>
                <div className="list-orders__item">Товар</div>
                <div className="list-orders__item">Страна</div>
                <div className="list-orders__item">Статус</div>
                <div className="list-orders__item">Дата</div>
                <div className="list-orders__item">Действие</div>
            </div>
        </>
    )
}

export default OrdersHeader