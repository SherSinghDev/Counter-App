import { NavLink } from "react-router-dom"
export default function Navbar() {
    return (
        <>
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="logo text-decoration-none" href="#">Super<span className="text-info">Tech</span></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link px-4 ps-0" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link px-4" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link px-4" to="services/">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link px-4" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}