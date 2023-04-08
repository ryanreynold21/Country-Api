import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../features/CountryApi";
import FilterSlice, { filterSlice } from "../features/FilterSlice"

export const store = configureStore({
    reducer:{
        [countryApi.reducerPath] : countryApi.reducer,
        filterSlice:FilterSlice
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
})