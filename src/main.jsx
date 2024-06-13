import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Reviews from './pages/Reviews'
import Cart from './pages/Cart' 
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/reviews' element={<Reviews />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path="/login" element={<LogIn />} /> 
      <Route path='/signup' element={<Register  />}/>
      <Route path='/profile' element={<Profile />}/>
      
    </Routes>
    <ToastContainer />
  </BrowserRouter>
  
)
