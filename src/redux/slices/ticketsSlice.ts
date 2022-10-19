import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import TicketsService from "../../api/TicketsService";
import {TicketsItemType} from "../../@types/@tickets";

// export const filtersTransfer = [
//     {value: -1, name: 'Все'},
//     {value: 0, name: 'Без пересадок'},
//     {value: 1, name: '1 пересадка'},
//     {value: 2, name: '2 пересадка'},
//     {value: 3, name: '3 пересадка'}
// ]
//
// export const orderNames = [
//     {value: 'cheapest', name: 'Самый дешевый'},
//     {value: 'fastest', name: 'Самый быстрый'},
//     {value: 'optimal', name: 'Оптимальный'},
// ]

interface TicketsSliceState {
    searchId: string
    tickets: TicketsItemType[]
}


export const getSearchId = createAsyncThunk(
    'tickets/getSearchId',
    async () => {
        const response = await TicketsService.getSearchId()
        return response.data.searchId
    }
)

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (searchId: string) => {
        const response = await TicketsService.fetchTickets(searchId)
        return response.data.tickets
    }
)


const initialState: TicketsSliceState = {
    searchId: '',
    tickets: []
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchId.fulfilled, (state: TicketsSliceState, action: PayloadAction<string>) => {
                state.searchId = action.payload
            })
            .addCase(fetchTickets.fulfilled, (state: TicketsSliceState, action: PayloadAction<TicketsItemType[]>) => {
                state.tickets = action.payload.slice(0, 5)
            })
    }
})

// export const selectFilterTransfers = (state: RootState )=> state.filter.transfers
// export const selectFilterOrderPrice = (state: RootState )=> state.filter.orderPrice

export const {} = ticketsSlice.actions

export default ticketsSlice.reducer

