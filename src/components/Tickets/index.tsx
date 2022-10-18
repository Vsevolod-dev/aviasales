import React, {FC, useEffect, useState} from 'react';
import TicketsOrder from "./Orders";
import TicketsItem from "./TicketsItem";
import axios from "axios";
import {TicketsItemType} from '../../@types/@tickets'
import {useSelector} from "react-redux";
import {selectFilterOrderPrice, selectFilterTransfers} from "../../redux/slices/filterSlice";

const Tickets: FC = () => {

    const [tickets, setTickets] = useState<TicketsItemType[]>([]);
    const [searchId, setSearchId] = useState('');

    const orderPrice = useSelector(selectFilterOrderPrice)
    const filterTransfer = useSelector(selectFilterTransfers)


    useEffect(() => {

        const fetchTickets = async (searchId: string) => {
            let responseTickets = await axios(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
            setTickets(responseTickets.data.tickets.slice(0, 5))
        }

        const fetchData = async () => {
            let responseSearchId = await axios('https://front-test.dev.aviasales.ru/search')
            await setSearchId(responseSearchId.data.searchId)

            fetchTickets(responseSearchId.data.searchId)
                .catch(e => {
                    console.error(e)
                    setTimeout(() => fetchTickets(responseSearchId.data.searchId), 1000)
                })
        }

        fetchData()
            .catch(e => {
                console.error(e)
            })

    }, [])

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
