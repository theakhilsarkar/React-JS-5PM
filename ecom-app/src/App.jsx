import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}
