import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { useGetCountryQuery } from '../features/CountryApi';
import {BsArrowLeft} from 'react-icons/bs'

const Details = () => {
  const {id} = useParams();
  const {data} = useGetCountryQuery();
  const filteredCountry = data?.filter(country => country?.name == id)
  return (
    <div className=' bg-gray-100 dark:bg-slate-800'>
      <Navbar />
      <div className="">
        <Link to={'/'}>
        <button className=' flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 dark:text-white border border-black rounded-md shadow-md mt-10 ml-20'> <BsArrowLeft /> <span>Back</span> </button>
        </Link>
        {filteredCountry?.map(country => {
          return(
            <div key={country?.name} className=" mx-36 mt-20 dark:text-white h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img src={country?.flag} className=" w-[500px] rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">{country?.name}</h1>
                  <div className=" flex mt-5 gap-2">
                  <div className=" flex flex-col ml-4 mb-5 font-bold text-lg">
                    <p>Native Name : <span className=' text-gray-500'> {country?.nativeName} </span> </p>
                    <p>Sub region : <span className=' text-gray-500'> {country?.subregion} </span> </p>
                    <p>Population : <span className=' text-gray-500'> {country?.population} </span> </p>
                    <p>Region : <span className=' text-gray-500'> {country?.region} </span>  </p>
                    <p>Capital : <span className=' text-gray-500'> {country?.capital} </span> </p>
                  </div>
                  <div className=" flex flex-col ml-4 mb-5 font-bold text-lg">
                    <p>Top level Domain : <span className=' text-gray-500'> {country?.topLevelDomain} </span> </p>
                    <p>Currency <span className=' text-gray-500'> {country?.currencies?.map(cu => cu.name)} </span> </p>
                    <p>Languages : <span className=' text-gray-500'>  {country?.languages?.map(lan => <span> {lan.name},</span>)}  </span> </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Details
