import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {orderNames, selectFilterOrderPrice, setOrder} from "../../../redux/slices/filterSlice";

const Price = () => {
    const dispatch = useDispatch()
    const orderPrice = useSelector(selectFilterOrderPrice)

    return (
        <div className="price">
            {orderNames.map((order, index) => <button
                key={index}
                className={"price__item " + (order.value === orderPrice ? 'active' : '')}
                onClick={() => dispatch(setOrder(order.value))}
            >{order.name}</button>)}
        </div>
    );
};

export default Price;
