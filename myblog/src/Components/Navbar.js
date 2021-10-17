import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid d-flex justify-content-between">
                <div className="d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src="../Images/b-logo1.png" className="mx-1" alt="logo" style={{ height: "50px", width: "60px" }} />
                    <a className="navbar-brand mx-1" href="/"><strong>My Blog</strong></a>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">
                                <Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "inherit" }}> Home </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/createpost">
                                <Link to="/newblog" style={{ textDecoration: "none", fontSize: "18px", color: "inherit" }}> New Blog </Link>
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <i className="fab fa-facebook-square mx-2" style={{ fontSize: "24px", color: "blue", cursor: "pointer" }}></i>
                        <i className="fab fa-instagram-square mx-2" style={{ fontSize: "24px", color: "#d66fc5", cursor: "pointer" }}></i>
                        <i className="fab fa-twitter-square mx-2" style={{ fontSize: "24px", color: "#10d7de", cursor: "pointer" }}></i>
                        <i className="fab fa-linkedin mx-2" style={{ fontSize: "24px", color: "#3120e6", cursor: "pointer" }}></i>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
