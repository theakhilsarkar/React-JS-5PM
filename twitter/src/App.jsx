import React from 'react'
import SignUp from '../components/SignUp'
import { Routes, Route } from 'react-router'
import HomePage from '../screens/HomePage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  )
}
