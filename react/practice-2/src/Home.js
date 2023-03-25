import React from 'react'
import './style.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';

function Home() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/main" element={<Main/>}></Route>
            <Route path="/about" element={<About/>}/>
        </Routes>
        {/* <div className='Home'>Home route</div> */}
    
    </BrowserRouter>
  )
}

export default Home;