import { useEffect, useRef } from "react"
import Child from "./Child";

export default function ForwardRef(){
    let element = useRef()
    useEffect(()=>{
        element.current.value = 1000;
    })
    function changeData(){
        element.current.value = 2000;
    }
    return(
        <>
        <Child ref={element}/>
        <button onClick={changeData}>Change Data</button>
        </>
    )
}