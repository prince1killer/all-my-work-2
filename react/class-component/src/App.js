import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Count from './components/Count';
import Navbar from './components/Navbar';
import Classclick from './components/Classclick';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/count' element={<Count/>}></Route>
      <Route path='/click' element={<Classclick/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
