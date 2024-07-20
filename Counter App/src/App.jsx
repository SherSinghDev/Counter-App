import { useState } from 'react'
import './App.css'

function App() {
  const [count, Setcount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>Setcount(count+1)}>Increment</button>
      <button style={{marginLeft:'15px'}} onClick={()=>Setcount(count-1)}>Decrement</button>
    </>
  )
}

export default App
