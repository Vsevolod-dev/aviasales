import React, {FC, UIEventHandler, useRef} from 'react';
import TransferItem from "./TransferItem";
import {useDispatch, useSelector} from "react-redux";
import {filtersTransfer, selectFilterTransfers, setTransfers} from "../../redux/slices/filterSlice";

const Filters: FC = () => {
    const dispatch = useDispatch()
    const transfers = useSelector(selectFilterTransfers)

    return (
        <section className="filters">
            <div className="filters__transfer transfer">
                <h4>Количество пересадок</h4>
                <ul className="transfer__list">
                    {
                        filtersTransfer.map((item, index) => {
                            return <TransferItem
                                active={transfers.includes(item.value)}
                                key={index}
                                {...item}
                                setTransfers={(value: number) => dispatch(setTransfers(value))}
                            />
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Filters;
