import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
   const {name, image, rating, comment} = review;

   return (
      <div className="col-lg-4 col-md-6">
         <div className="review-box">
            <div className="img-box">
               <img src={image} alt="" />
            </div>
            <div className="info">
               <p className="mb-3">"{comment.slice(0, 100)}"</p>
               <Rating 
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={rating}
                  readonly></Rating>
               <h5 className="name">- {name}</h5>
            </div>
         </div>
      </div>
   );
};

export default Review;