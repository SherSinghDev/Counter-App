import Content from "./Content";
import img from "../assets/about.png";

export default function About(){
    let head = <h1 className="m-head">Get to know <span>About <span className="text-info">Us</span></span></h1>
    return(
        <>
        <Content btnText="Visit Our Services" imgSrc={img} head={head}/>
        </>
    )
}

