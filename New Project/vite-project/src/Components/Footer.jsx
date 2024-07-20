export default function Footer(props){
    function onclickHandler(){
        console.log("Hello World")
    }
    return(
        <>
        <h1 className="text-white text-center">I am {props.b[0]} and my course is {props.b[1]}</h1>
        <button className="btn btn-success" onClick={onclickHandler}>Get Started</button>
        </>
    )
}

