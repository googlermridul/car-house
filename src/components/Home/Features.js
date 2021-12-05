import React from 'react';
import brand from '../../images/brand.png'
import client from '../../images/client.png'
import finance from '../../images/finance.png'

const Features = () => {
   return (
      <div className="feature">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>Why choose us?</h2>
                     <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="feature-box">
                     <div className="img-box">
                        <img src={brand} alt="" />
                     </div>
                     <h3>Wide range of brands</h3>
                     <p className="mb-0">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="feature-box">
                     <div className="img-box">
                        <img src={client} alt="" />
                     </div>
                     <h3>Trusted by our clients</h3>
                     <p className="mb-0">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="feature-box">
                     <div className="img-box">
                        <img src={finance} alt="" />
                     </div>
                     <h3>Fast & easy financing</h3>
                     <p className="mb-0">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Features;