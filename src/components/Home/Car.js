import React from 'react';
import { useHistory } from 'react-router';

const Car = ({car}) => {
   const {_id, image, name, price, description, year} = car;
   
   const history = useHistory()
   const handleDetails = id => {
      const url = `/car/${id}`
      history.push(url)
   }

   return (
      <div className="col-lg-4 col-md-6 mx-auto">
         <div className="car-box">
            <div className="img-box">
               <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="info">
               <h4 className="name">{name} <span className="year"> {year}</span></h4>
               <p className="des">{description.slice(0, 60)}...</p>
               <div className="bottom">
                  <h3 className="price">${price}</h3>
                  <button onClick={() => handleDetails(_id)} className="btn-car sm">Grab Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Car;