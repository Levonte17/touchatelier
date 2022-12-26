import React from 'react'
import reviewww from '../assets/reviewww.png';
import revieww from '../assets/revieww.png';
import review from '../assets/review.png';
function Review(props) {
  return (
    <div className='testimony'>
      <h2>
        CUSTOMER REVIEWS
      </h2>
      <h1>
        TESTIMONIALS
      </h1>
    <div className='testimony1'>
            <div className='review'>
            <img 
        className="reviewe" 
        src={review} 
        alt="review"
    />

<img 
        className="reviewer" 
        src={revieww} 
        alt="review"
    />

<img 
        className="reviewer" 
        src={reviewww} 
        alt="review"
    />
    </div>
    </div>
    </div>
  )
}

export default Review;
