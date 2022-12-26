import React from 'react';
import Sidebar from './Sidebar';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
    <div className='navbar'>
        <Link to="#"
            className='menu-bars'>
                <div>      
                  <FaIcons.FaBars/>
                </div>
      </Link>
        <Link to="#"
            className='menu-bars'>
                <div>
                  <GrIcons.GrSchedule />
                </div>
      </Link>
        <Link to="#"
            className='menu-bars'>
              
                <div>
                  <FcIcons.FcAbout />
                </div>
      </Link>
              
        <Link to="#"
            className='menu-bars'>
                <div>
                  <FaIcons.FaHome />
                </div>
      </Link>
    </div>
    <nav className={
        Sidebar ? 'nav-menu active' : 'nav-menu'
    }>
        <ul className='nav-menu-items'>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>

                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
};

export default Navbar;
