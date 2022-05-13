import React from "react"
import { Link } from "react-router-dom"
import proto_svg from "../../Resources/proto.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/projects">Projects</Link>
            <div className="dropdown-content">
              <Link to="/projects/stbot">StationBot</Link>
              <Link to="/projects/mainpage">Mainpage</Link>
            </div>
          </div>
        </li>
        <li>
          <img width={25} height={25} src={proto_svg} />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
