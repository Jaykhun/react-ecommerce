import {useGetAllOrdersQuery} from "../../../store/api/order/orderApi";
import {Error, Message} from "../../../components/UI";
import OrdersItem from "./OrdersItem";
import "./Orders.scss";

const Orders = () => {
    const {data: orders, isLoading, isError, error} = useGetAllOrdersQuery('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwb2xhdCIsImlzX2FkbWluIjoxLCJleHAiOjE2NzgxMTQ0OTd9.8lVbSv84Mm7VDfa6Yx-O-KEL8JpwIANi5M8lWqvFr1Q')
    window.scrollTo(0, 0);

    return (
        <div className="orders">
            <div className="orders__title title">Заказы</div>
            <div className="orders__body">
                {
                    isLoading
                        ? <p>Loading</p>
                        : isError
                            ? <Error error={error}/>
                            : orders?.length
                                ? orders?.map(order => <OrdersItem order={order} key={order.id}/>)
                                : <Message value='нет заказы'/>
                }
            </div>
        </div>
    );
};

export default Orders;