import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country : []
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers :{
        searchCountry : (state,{payload}) => {
            state.country = payload
        },
        // filterCountry : (state,{payload}) => {
        //     state.country = payload
        // }
    }
});

export const {searchCountry} = filterSlice.actions
export default filterSlice.reducer