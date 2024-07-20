import { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(10);

    const counter = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);   //output is increase one by one like--->10,11,12,13

        //But if we want to increase the value like--->10,15,20,30 then use the callback function 

        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)

    };
    return (
        <>
            <h1>Counter! {count}</h1>

            <button onClick={counter}>add+</button>
            <button onClick={()=>setCount(count-1)}>minus-</button>
        </>
    )
}