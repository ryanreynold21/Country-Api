import React, { useEffect, useState } from 'react'
import { useGetCountryQuery } from '../features/CountryApi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Country = () => {
  const {data} = useGetCountryQuery();
  const {country} = useSelector(state => state.filterSlice )

 return (
    <div className=' flex flex-wrap gap-3'>
      
      {country?.map(country => {
        return (
          <Link to={`/${country?.name}`}>
          <div key={country?.area} className="card w-96 bg-base-100 dark:bg-slate-700 dark:text-white shadow-xl p-5">
            <img className=' w-full h-[200px]' src={country?.flag} alt="" />
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-2xl">{country?.name}</h2>
            </div>
              <div className=" flex flex-col ml-4 mb-5 font-bold text-lg">
                <p>Population : <span className=' text-gray-500'> {country?.population} </span> </p>
                <p>Region : <span className=' text-gray-500'> {country?.region} </span>  </p>
                <p>Capital : <span className=' text-gray-500'> {country?.capital} </span> </p>
              </div>
        </div>
         </Link>
        )
      } )}
    </div>
  )
}

export default Country
