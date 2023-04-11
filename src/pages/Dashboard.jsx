import React from 'react'
import Filter from '../components/Filter'
import Navbar from  '../components/Navbar'
import Country from '../components/Country'
import { motion } from 'framer-motion'
const Dashboard = () => {
  return (
    <div className=''>
        <Navbar />
        <motion.div layout className=" h-screen bg-slate-100 dark:bg-slate-800">
        <Filter />
        <Country />
        </motion.div>
    </div>
  )
}

export default Dashboard
