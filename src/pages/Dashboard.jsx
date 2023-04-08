import React from 'react'
import Filter from '../components/Filter'
import Navbar from  '../components/Navbar'
import Country from '../components/Country'

const Dashboard = () => {
  return (
    <div className=''>
        <Navbar />
        <div className=" bg-slate-100 dark:bg-slate-800">
        <Filter />
        <Country />
        </div>
    </div>
  )
}

export default Dashboard
