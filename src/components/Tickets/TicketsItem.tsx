import React, {FC} from 'react';
import secondaryLogo from "../../assets/img/S7 Logo.png";
import {TicketsItemType} from "../../@types/@tickets";
import {dateNormalize, durationNormalize, stopsNormalize} from "../../utils";

const TicketsItem: FC<TicketsItemType> = ({price, segments}) => {

    return (
        <li className="tickets__item">
            <div className="tickets__header">
                <span className="tickets__price">{price} р </span>
                <span className="tickets__logo">
                    <img src={secondaryLogo} alt="Logo"/>
                </span>
            </div>
            <div className="tickets__info">
                {segments.map((item, index) => {
                    return <div key={index} className="tickets__direction">
                        <div className="block">
                            <div className="block__name">{item.origin} – {item.destination}</div>
                            <div className="block__content">{dateNormalize(item.date, item.duration)}</div>
                        </div>
                        <div className="block">
                            <div className="block__name">В пути</div>
                            <div className="block__content">{durationNormalize(item.duration)}</div>
                        </div>
                        <div className="block">
                            <div className="block__name">
                                {
                                    item.stops.length
                                        ? stopsNormalize(item.stops.length)
                                        : 'Без пересадок'
                                }
                            </div>
                            <div className="block__content">{item.stops.join(', ')}</div>
                        </div>
                    </div>
                })}
            </div>
        </li>
    );
};

export default TicketsItem;
