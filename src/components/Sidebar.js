import React from 'react';
import {FaBars, FaHome} from "react-icons/fa";
import {GrSchedule} from "react-icons/gr";
import {FcAbout} from "react-icons/fc";

import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <>
    <div className='nav-menu'>
        <Link to="#"
            className='menu-bars'>
                <div>      
                  <FaBars />
                </div>
      </Link>
        <Link to="#"
            className='menu-bars'>
                <div>
                  <GrSchedule />
                </div>
      </Link>
        <Link to="#"
            className='menu-bars'>
              
                <div>
                  <FcAbout />
                </div>
      </Link>
              
        <Link to="#"
            className='menu-bars'>
                <div>
                  <FaHome />
                </div>
      </Link>
    </div>
    </>
  )
};

export default Sidebar;
