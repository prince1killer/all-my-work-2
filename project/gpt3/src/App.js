import './App.css';
import './index.css'
import { Footer, Blog, Possibility, Features,Header,WhatGPT3 } from './containers'
import { Article, Brand, Cta, Feature, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

    </div>
  );
}

export default App;
