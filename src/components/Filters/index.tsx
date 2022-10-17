import React, {FC} from 'react';
import check from "../../assets/img/Shape.svg";

const Filters: FC = () => {
    return (
        <section className="filters">
            <div className="filters__transfer transfer">
                <h4>Количество пересадок</h4>
                <ul className="transfer__list">
                    <li className="transfer__item">
                        <div className="transfer__checkbox">
                            <img src={check} alt=""/>
                        </div>
                        <span>Все</span>
                    </li>
                    <li className="transfer__item">
                        <div className="transfer__checkbox">
                            <img src="" alt=""/>
                        </div>
                        <span>Без пересадок</span>
                    </li>
                    <li className="transfer__item">
                        <div className="transfer__checkbox">
                            <img src="" alt=""/>
                        </div>
                        <span>1 пересадка</span>
                    </li>
                    <li className="transfer__item">
                        <div className="transfer__checkbox">
                            <img src="" alt=""/>
                        </div>
                        <span>2 пересадка</span>
                    </li>
                    <li className="transfer__item">
                        <div className="transfer__checkbox">
                            <img src="" alt=""/>
                        </div>
                        <span>3 пересадка</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Filters;
