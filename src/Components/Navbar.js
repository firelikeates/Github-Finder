import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav navbar-expand-sm navbar-dark bg-primary">
            <div className="container text-left">
                <Link to="/" className="a-1 navbar-brand">Github-Finder <i className="fab fa-github"></i></Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mx-3 ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar