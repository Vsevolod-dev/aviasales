import React, {FC, useEffect} from 'react';
import TicketsOrder from "./Orders";
import TicketsItem from "./TicketsItem";
import {TicketsItemType} from '../../@types/@tickets'
import {useSelector} from "react-redux";
import {selectFilterOrderPrice, selectFilterTransfers} from "../../redux/slices/filterSlice";
import {fetchTickets, getSearchId} from "../../redux/slices/ticketsSlice";
import {RootState, useAppDispatch} from "../../redux/store";

const Tickets: FC = () => {

    const dispatch = useAppDispatch()
    const {searchId, tickets} = useSelector((state: RootState) => state.tickets)

    const orderPrice = useSelector(selectFilterOrderPrice)
    const filterTransfer = useSelector(selectFilterTransfers)

    useEffect(() => {
        dispatch(getSearchId())
    }, [])

    useEffect(() => {
        if (searchId !== '') dispatch(fetchTickets(searchId))
    }, [searchId])

    function filterAndSort(tickets: TicketsItemType[]) {
        return tickets
            .filter((ticket: TicketsItemType) => filterTransfer.includes(ticket.segments[0].stops.length))
            .sort((a,b) => {
                switch (orderPrice) {
                    case 'cheapest':
                        return a.price - b.price
                    case 'fastest':
                        return a.segments[0].duration - b.segments[0].duration
                    case 'optimal':
                        return (a.price / a.segments[0].duration) - (b.price / b.segments[0].duration)
                    default:
                        return 1
                }
            })
    }

    return (
        <section className="tickets">
            <TicketsOrder/>
            <ul className="tickets__list">
                {
                    tickets.length
                        ? filterAndSort(tickets).map((ticket, index) => <TicketsItem key={index} {...ticket} />)
                        : <div>Loading...</div>
                }
            </ul>
            <button className={"tickets__more"}>
                Показать еще 5 билетов!
            </button>
        </section>
    );
};

export default Tickets;
