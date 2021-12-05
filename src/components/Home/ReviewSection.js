import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const ReviewSection = () => {
   const [reviews] = useReviews();

   return (
      <div className="feature review-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>What Clients Say!</h2>
                     <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  reviews.map(review => <Review
                     review={review} 
                     key={review._id} ></Review> )
               }
            </div>
         </div>
      </div>
   );
};

export default ReviewSection;