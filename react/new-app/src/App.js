// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
