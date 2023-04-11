import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCountryQuery } from '../features/CountryApi'
import { searchCountry } from '../features/FilterSlice'

const Filter = () => {
  const dispatch = useDispatch();
  const {data} = useGetCountryQuery();
  const [search,setSearch] = useState('');
  const [filter,setFilter] = useState('');

  useEffect(() => {
    const filtered = data?.filter(country => country?.region.toLowerCase().includes(filter.toLowerCase()))
     dispatch(searchCountry(filtered))
  },[data,filter])

  useEffect(() => {
    const searched = data?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
     dispatch(searchCountry(searched))
  },[search,data])

  return (
    <div>
      <div className=" p-10">
        <div className="flex justify-between">
            <div className="text-lg justify-center rounded">
                <div className="form-control">
                    <div className="input-group">
                        <input
                          value={search}
                          onChange={(e) =>{ setSearch(e.target.value)}}
                          type="text"
                          placeholder="Search…"
                          className="input input-bordered dark:bg-slate-700 dark:text-white" />
                        <button className=' btn text-xl'>
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center bg-white dark:bg-slate-700 text-xl p-2 rounded shadow-sm cursor-pointer">
                <div className="dropdown">
                  <label tabIndex={0} className=" dark:text-white m-1">Filtered By Region</label>
                  <ul
                   tabIndex={0} 
                   className="dropdown-content menu p-2 shadow dark:bg-slate-700 dark:text-white bg-base-100 rounded-box w-52">
                    <li onClick={() => setFilter('Africa')} ><a>Africa</a></li>
                    <li onClick={() => setFilter('Americas')} ><a>Americas</a></li>
                    <li onClick={() => setFilter('Asia')} ><a>Asia</a></li>
                    <li onClick={() => setFilter('Europe')} ><a>Europe</a></li>
                    <li onClick={() => setFilter('Oceania')} ><a>Oceania </a></li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
