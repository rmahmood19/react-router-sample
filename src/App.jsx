import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {About} from "./pages/About.jsx";
import {Home} from "./pages/Home.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <div className='flex justify-between gap-2'>
                <div>
                    <Link className='font-extrabold text-2xl' to='/'>#VANLIFE</Link>
                </div>
                <div className='flex gap-4 justify-center'>
                    <Link to='/about'>Home</Link>
                    <Link to='/van'>About</Link>
                </div>

            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
