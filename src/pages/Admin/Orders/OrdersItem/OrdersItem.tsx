import React, {FC} from 'react';
import "./OrdersItem.scss";
import {UserOrders} from "../../../../store/api/order/orderType";

interface OrdersItemPropsType {
    order: UserOrders
}

const OrdersItem: FC<OrdersItemPropsType> = ({order}) => {
    const {user_id, id, order_date, order_details, order_status, address_id} = order

    return (
        <div>
            {order_details[0].price}
        </div>
    );
};

export default OrdersItem;