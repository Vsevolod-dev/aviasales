import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice";
import ticketsSlice from "./slices/ticketsSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        tickets: ticketsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()