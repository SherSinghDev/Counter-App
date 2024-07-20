import { useEffect, useRef } from "react"

export default function UseRef() {
    const values = useRef();
    const para = useRef();
    useEffect(() => {
        values.current.style.backgroundColor = "aqua";
        values.current.value = 1000;
        console.log(para.current.innerText)
    },[])
    function clickHandler(){
        para.current.style.color = "greenyellow";
        values.current.style.backgroundColor = "crimson";
        values.current.value = 2000;
    }
    return (
        <>
            <input type="text" name="input" id="input" ref={values} />
            <p ref={para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit deserunt ut libero! Deserunt, veritatis beatae. Corporis fugit quae odio?</p>
            <button onClick={clickHandler}>Change Para Color</button>
        </>
    )
}