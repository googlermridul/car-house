import React from 'react';

const Review = ({review}) => {
   const {name, image, comment} = review;

   return (
      <div className="col-lg-4 col-md-6">
         <div className="review-box">
            <div className="img-box">
               <img src={image} alt="" />
            </div>
            <div className="info">
               <p className="mb-0">"{comment.slice(0, 100)}"</p>
               <h5 className="name">- {name}</h5>
            </div>
         </div>
      </div>
   );
};

export default Review;