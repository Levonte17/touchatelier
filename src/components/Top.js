import React from 'react'
import {GrSchedule} from "react-icons/gr";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Top(props) {
  return (
    <div className='top'>
                <div className='navs'>
    <a href='tel:+19544083913' className='a'>
             <FiPhoneCall />
             (954)408-3913
    </a>
                </div>

                <div className="contact2">
    </div>


                <div className='navs'>
                <a href='https://touchatelier.as.me/schedule.php' className='a'>
                <GrSchedule />
                Book Appointment
            </a>
                </div>
                
                <div className='navs'>
                    <a href='https://www.instagram.com/touchatelier_/'
                        className='a'>
                        <FiInstagram/> 
                        Follow us
                    </a> 
                </div>


                </div>
  )
};

export default Top
