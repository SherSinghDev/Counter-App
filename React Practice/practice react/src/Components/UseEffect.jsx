import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0)
    const [countUp, setCountUp] = useState(false);
    const [countDown, setCountDown] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [city, setCity] = useState("");

    const increment = () => {
        setCount(count + 1)
        setCountUp(true)
        setCountDown(false)
    };
    const decrement = () => {
        setCount(count - 1)
        setCountDown(true)
        setCountUp(false)
    };
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '800bb29ce7mshafbf033e5549ed4p119bb3jsnc40c54f82f87',
                'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city?city:"mathura"}`;
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }, [toggle])

    function formHandler(e){
        e.preventDefault()
        setToggle(!toggle) 
    }
    return (
        <>
            <h1>Counter! {count}</h1>
            <button onClick={increment}>add+</button>
            <button onClick={decrement}>minus-</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={(e)=>formHandler(e)}>
                <input type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)} />
                <button type="submit">Change City</button>
            </form>

            {countUp && <h1>You are increasing</h1>}
            {countDown && <h1>You are Decreasing</h1>}
        </>
    )
}