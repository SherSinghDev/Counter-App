import { useState } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Components/Navbar';
// import reactLogo from './assets/react.svg'
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import './App.css'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  let data1 = {
    name:"samir",
    course:"AWDP"
  }
  let data2 = ["Priyanka","AWDP"]
  return (
    <>
      {/* <div style={{textAlign:"center"}} className='text-primary'>
        <Home />
        <About />
      </div> */}

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/services' Component={Services} />
          <Route path='/contact' Component={Contact} />
        </Routes>
        {/* <Footer A={data1} /> */}
        {/* <Footer name='samir' surname='siddique'/> */}
        {/* <Footer b={data2}></Footer> */}
      </Router>

    </>
  )
}

export default App
