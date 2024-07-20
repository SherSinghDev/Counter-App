
function App() {
  function changemode() {
    document.querySelector('body').classList.toggle('dark')
  }
  function changeColor(color) {
    document.documentElement.style.setProperty("--main-color", color)
  }
  return (
    <>
      <button onClick={changemode}>changeMode</button>
      <h1>I am the heading</h1>
      <div className="btn-box">
        <div className="color color-1" onClick={() => changeColor("hotpink")}></div>
        <div className="color color-2" onClick={() => changeColor("crimson")}></div>
        <div className="color color-3" onClick={() => changeColor("greenyellow")}></div>
        <div className="color color-4" onClick={() => changeColor("aqua")}></div>
      </div>
    </>
  )
}

export default App
