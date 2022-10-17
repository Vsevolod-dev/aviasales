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
            setTickets(responseTickets.data.tickets)
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

    return (
        <section className="tickets">
            <TicketsOrder/>
            <ul className="tickets__list">
                {
                    tickets.length
                        ? tickets.map((ticket, index) => {
                                if (index < 5 && filterTransfer.includes(ticket.segments[0].stops.length)) {
                                    return <TicketsItem key={index} {...ticket} />
                                }
                            })
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
