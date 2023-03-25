import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contect from './components/Contect';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Contect/>
      <Footer/>
    </div>
  );
}

export default App;
