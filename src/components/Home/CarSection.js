import React from 'react';
import useCars from '../../hooks/useCars'
import Car from './Car';

const CarSection = () => {
   const [cars] = useCars()

   return (
      <div className="car-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>Find Your Dream</h2>
                     <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  cars.map(car => <Car 
                     car={car} 
                     key={car.id} ></Car> )
               }
            </div>
         </div>
      </div>
   );
};

export default CarSection;