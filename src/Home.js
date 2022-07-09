import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Contact from './Pages/Contact'
import Fav from './Pages/Fav'
import Order from './Pages/Order'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/' element = {<Contact />} />
        <Route path='/' element = {<Fav />} />
        <Route path='/' element = {<Order />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home