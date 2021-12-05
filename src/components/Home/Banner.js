import React from 'react';

const Banner = () => {
   return (
      <div className="home-banner">
         <div className="overlay">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="text-box">
                        <h1>Car House Imports</h1>
                        <p>Car House Limited inaugurated in 1991 and has been importing brand new and reconditioned vehicles. Thanks to all our customers for their help and support for the last two decades. We will try to serve you with the best products.</p>
                        <button className="btn-car">Contact Us</button>
                     </div>
                  </div>
                  <div className="col-lg-6"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;