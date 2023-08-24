import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './pages/home/home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleDestination from './Components/SinglePage/SingleDestination'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='destination'>
            <Route path=':slug' element={<SingleDestination />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
