import React from "react";
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <div className="dropdown">
                        <Link to="/projects">Projects</Link>
                        <div className="dropdown-content">
                                <Link to="/projects/stbot">StationBot</Link>
                                <Link to="/projects/mainpage">Mainpage</Link>                     
                        </div>
                   </div>   
                </li>
            </ul>
        </div>
    );
}

export default Navbar;