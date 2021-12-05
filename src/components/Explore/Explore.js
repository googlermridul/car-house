import React from 'react';
import useCars from '../../hooks/useCars';
import Car from '../Home/Car';
import Footer from '../Shared/Footer';
import Navigration from '../Shared/Navigration';

const Explore = () => {
   const [cars] = useCars()

   return (
      <>
         <Navigration />
         <div className="car-section explore">
            <div className="container">
               <div className="row">
                  <div className="col">
                     <div className="header-text">
                        <h2>Explore More Dream</h2>
                        <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     cars.map(car => <Car 
                        car={car} 
                        key={car._id} ></Car> )
                  }
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Explore;