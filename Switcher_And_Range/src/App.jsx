import { useState } from 'react'
import './App.css'

function App() {
  // For Switcher
  const [switcher,setSwitcher] = useState(false)
  function switchHandler(){
    setSwitcher(!switcher)
  }
  let switchClass = switcher?"toggler switched":"toggler"

  // For Range
  const [position,setPosition] = useState(596)
  function rangeClick(e){
    console.log(e)
    console.log(e.clientX - e.target.offsetLeft)
    let range = e.clientX - e.target.offsetLeft;
    if(range>11 && range<588){
      setPosition(range + 11)
    }
    else if(range>588){
      setPosition(596)
    }
    else if(range<11){
      setPosition(24)
    }
  }
  
  return (
    <>
    <div className="switcher" onClick={switchHandler}>
      <div className={switchClass}></div>
    </div>

    <div className="range" onClick={(e)=>rangeClick(e)}>
      <div className="range-slider" style={{width:position}}></div>
    </div>
    </>
  )
}

export default App
