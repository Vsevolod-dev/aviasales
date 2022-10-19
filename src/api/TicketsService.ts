import axios, { AxiosResponse } from "axios";
// import { TicketsItemType } from "../@types/@tickets";

export default class TicketsService {

    static async getSearchId(): Promise<AxiosResponse> {
        return axios.get(`https://front-test.dev.aviasales.ru/search`) //todo: return type
    }

    static async fetchTickets(searchId: string): Promise<AxiosResponse> {
        return axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
    }
}