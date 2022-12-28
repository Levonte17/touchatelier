import React from 'react'
import prior from '../assets/prior.png'
import depo from '../assets/depo.png'
import policy from '../assets/policy.png'

function Policy(props) {
  return (
    <div className='policy1'>
      <prior />
      <depo />
      <img src={ prior } className='policy' 
            alt='combo brows' 
        />
      <img src={ depo } className='policy' 
            alt='combo brows' 
        />
      <img src={ policy } className='policy' 
            alt='combo brows' 
        />
      <policy />
    </div>
  )
}

export default Policy
