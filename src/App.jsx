import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {About} from "./pages/About.jsx";
import {Home} from "./pages/Home.jsx";

import '../server.js'
import {VanList} from "./pages/Vans/VanList.jsx";
import {VanDetail} from "./pages/Vans/VanDetail.jsx";
import {Layout} from "./components/Layout.jsx";
import {Dashboard} from "./pages/Host/Dashboard.jsx";
import {Income} from "./pages/Host/Income.jsx";
import {Reviews} from "./pages/Host/Reviews.jsx";
import {HostLayout} from "./pages/Host/HostLayout.jsx";
import {HostVans} from "./pages/Host/HostVans.jsx";
import {HostVanDetail} from "./pages/Host/HostVanDetail.jsx";
import {HostVanInfo} from "./pages/Host/HostVanInfo.jsx";
import {HostVanPricing} from "./pages/Host/HostVanPricing.jsx";
import {HostVanPhoto} from "./pages/Host/HostVanPhoto.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='*' element={<p>Page not found</p>} />
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='van' element={<VanList/>}/>
                    <Route path='van/:id' element={<VanDetail/>}/>
                    <Route path='host' element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path='income' element={<Income/>}/>
                        <Route path='reviews' element={<Reviews/>}/>
                        <Route path='vans' element={<HostVans/>}/>
                        <Route path='vans/:id' element={<HostVanDetail/>}>
                            <Route index element={<HostVanInfo/>} />
                            <Route path='pricing' element={<HostVanPricing/>} />
                            <Route path='photos' element={<HostVanPhoto/>} />
                        </Route>
                    </Route>

                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
