import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/Login'
import Main from './component/Main'
import NotFound from './component/NotFound'
import Register from './component/Register'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

