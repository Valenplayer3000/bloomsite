import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import proto_svg from "../../Resources/proto.svg";

const Navbar = () => {
  console.log(location.pathname);
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <div className='dropdown'>
        <Link to='/projects'>Projects</Link>
        <div className='dropdown-content'>
          <Link to='/projects/stbot'>StationBot</Link>
          <Link to='/projects/mainpage'>Mainpage</Link>
        </div>
      </div>
      <div className='align_right'>
        <div className='proto_speen speen'>
          <img
            width={25}
            height={25}
            src={proto_svg}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
