import React from "react";
import Link from "next/link";
import {Info, Home, Box} from "react-feather"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link passHref href='/'>Home</Link>
      <Link passHref href='/about'><div className="icon"><Info size={24} className='navbar-icon'/><span className="navtooltip">Info</span></div></Link>
      <div className='dropdown'>
        <Link passHref href='/projects'>Projects</Link>
        <div className='dropdown-content'>
          <Link passHref href='/projects/stbot'>StationBot</Link>
          <Link passHref href='/projects/mainpage'>Mainpage</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
