import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import DetailPage from './components/detail/DetailPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </div>
  )
}
