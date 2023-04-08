import React, { useEffect } from 'react'
import "./App.css"
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Dashboard /> } />
      <Route path='/:id' element={ <Details /> } />
    </Routes>
    </>
  )
}

export default App