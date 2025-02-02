import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="logo">Super<span>Pick</span></div>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="services">Services</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
            <button className="btn">Get Started</button>
        </nav>
        </>
    )
}