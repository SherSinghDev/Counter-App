import img from "../assets/home-img.png";
import Content from "./Content";
export default function Home() {
    let head = <h1 className="m-head">Welcome to the world <span>Super<span className="text-info">Tech</span></span></h1>
    return (
        <>
            <Content btnText="Get Started" imgSrc={img} head={head} />
        </>
    )
}

