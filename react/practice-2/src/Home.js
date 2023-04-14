import React from 'react'
import './style.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Calculate from './components/Calculate';
import Multcal from './components/Multcal';
import Shoping from './components/Shoping';
import Check from './components/Check';
import Drop from './components/Drop';
import Login from './components/Login';
import Session from './components/Session';
import Session1 from './components/Session1';
import Radiobtn from './components/Radiobtn';


function Home() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Calculate/>}></Route>
            <Route path="/cal" element={<Multcal/>}></Route>
            <Route path='/shop' element={<Shoping/>}></Route>
            <Route path="/check" element={<Check/>}></Route>
            <Route path="/drop" element={<Drop/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/session' element={<Session/>}></Route>
            <Route  element={<Session1/>}></Route>
            <Route path='/radio' element={<Radiobtn/>}></Route>

        </Routes>
        {/* <div className='Home'>Home route</div> */}
    
    </BrowserRouter>
  )
}

export default Home;