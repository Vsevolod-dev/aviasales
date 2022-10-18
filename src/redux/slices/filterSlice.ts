import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store";

export const filtersTransfer = [
    {value: -1, name: 'Все'},
    {value: 0, name: 'Без пересадок'},
    {value: 1, name: '1 пересадка'},
    {value: 2, name: '2 пересадка'},
    {value: 3, name: '3 пересадка'}
]

export const orderNames = [
    {value: 'cheapest', name: 'Самый дешевый'},
    {value: 'fastest', name: 'Самый быстрый'},
    {value: 'optimal', name: 'Оптимальный'},
]

interface FilterSliceState {
    transfers: number[]
    orderPrice: 'cheapest' | 'fastest' | 'optimal'
}

const initialState: FilterSliceState = {
    transfers: filtersTransfer.map(i => i.value),
    orderPrice: 'cheapest'
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTransfers: (state, action) => {
            const currTransfers = JSON.parse(JSON.stringify(state.transfers))
            if (currTransfers.includes(action.payload)) {
                if (action.payload === -1) {
                    state.transfers = []
                }
                else {
                    state.transfers = currTransfers.filter((i: number) => (i !== action.payload) && i !== -1)
                }
            } else {
                if (action.payload === -1) state.transfers = filtersTransfer.map(i => i.value)
                else state.transfers = [...currTransfers, action.payload]
            }
        },
        setOrder: (state, action) => {
            state.orderPrice = action.payload
        }
    },
})

export const selectFilterTransfers = (state: RootState )=> state.filter.transfers
export const selectFilterOrderPrice = (state: RootState )=> state.filter.orderPrice

export const { setTransfers, setOrder } = filterSlice.actions

export default filterSlice.reducer

