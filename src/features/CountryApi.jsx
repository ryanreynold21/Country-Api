import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countryApi = createApi({
    reducerPath : 'countryApi',
    baseQuery : fetchBaseQuery({baseUrl:'http://127.0.0.1:3000'}),
    endpoints: (builder) => ({
        getCountry : builder.query({
            query:() => '/country',
            providesTags:['countryApi']
        }),
    }) 
})

export const {useGetCountryQuery} = countryApi;