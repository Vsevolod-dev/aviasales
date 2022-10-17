import React, {FC} from 'react';
import check from "../../assets/img/Shape.svg";
import {stopsNormalize} from "../../utils";

type TransferItemProps = {
    active: boolean
    name: string,
    value: number,
    setTransfers: (value: number) => void
}

const TransferItem: FC<TransferItemProps> = ({active, name, value, setTransfers}) => {
    return (
        <li className="transfer__item" onClick={() => setTransfers(value)}>
            <div className="transfer__checkbox">
                {active && <img src={check} alt=""/>}
            </div>
            <span>
                {
                    parseInt(name[0])
                        ? stopsNormalize(parseInt(name[0]))
                        : name
                }
            </span>
        </li>
    );
};

export default TransferItem;
