import React from 'react'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Users from './components/Users/Users'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/users' element={<Users />} />
      </Routes>


    </div>
  )
}


// routes = 

// home
// cart
// detail
// privacy-policy

// www.ecart.com/
// www.ecart.com/cart
// www.ecart.com/detail
// www.ecart.com/privacy-policy



// function - block of code

// module = reuseable block of code to perform specific task

// 1. bult-in module
// 2. custom module - user define module
// 3. third-party module - react-router, react-router-dom


// https://www.npmjs.com/