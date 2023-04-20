import React from 'react';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Jsxinfo from './components/Jsxinfo';
import State from './components/State';
import Classcomponent from './components/Classcomponent';
import Propsfun from './components/Propsfun';
import Destructionfun from './components/Destructionfun';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Jsxinfo/>}></Route>
        <Route path='/classcom' element={<Classcomponent/>}></Route>
        <Route path='/state' element={<State/>}></Route>
        <Route path='/prop' element={<Propsfun hello={"hi"}/>}></Route>
        <Route path='/des' element={<Destructionfun name={"pranav"} roll={34} city={"HMT"} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;