import React from "react";
import Link from "next/link";
import {Info, Home, Box} from "react-feather"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link passHref href='/'><div className="navcontent"><Home size={24} /><p>Home</p></div></Link>
      <Link passHref href='/about'><div className="navcontent"><Info size={24}/><p>Info</p></div></Link>
      <div className='dropdown'>
        <Link passHref href='/projects'><div className="navcontent"><Box size={24} /><p>Proyects</p></div></Link>
        <div className='dropdown-content'>
          <Link passHref href='/projects/stbot'><div>StationBot</div></Link>
          <Link passHref href='/projects/mainpage'><div>Mainpage</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
