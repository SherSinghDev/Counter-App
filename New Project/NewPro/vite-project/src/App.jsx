import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
function App() {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='about' Component={About} />
          <Route path='services' Component={Services} />
          <Route path='Contact' Component={Contact} />
        </Routes>
      </Router>
    </>
  )
}

export default App
