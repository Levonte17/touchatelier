import React from 'react'
import { NavLink } from 'react-router-dom';
import {GrSchedule} from "react-icons/gr";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Top(props) {
  return (
    <div className='top'>
                <div className='navs'>
            <NavLink to="/">
                <p>
             <FiPhoneCall />
             (954)408-3913
                </p>
            </NavLink>
                </div>

                <div className='navs'>
            <NavLink to="/book">        
                <p>
                <GrSchedule />
                Book Now
                </p>
            </NavLink>
                </div>

                <div className='navs'>
            <NavLink to="/people">
                <p>
                <FiInstagram/> Follow us
                </p>
            </NavLink> 

                </div>
                </div>
  )
};

export default Top
