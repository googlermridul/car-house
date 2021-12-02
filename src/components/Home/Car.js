import React from 'react';
import { useHistory } from 'react-router';

const Car = ({car}) => {
   const {id, image, name, price, description, year} = car;
   
   const history = useHistory()
   const handleDetails = id => {
      const url = `/car/${id}`
      history.push(url)
   }

   return (
      <div className="col-lg-4 col-md-6 mx-auto">
         <div className="car-box shadow">
            <div className="img-box">
               <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="info">
               <h4 className="name">{name}</h4>
               {/* <p className="type">{year}</p> */}
               <p className="des">{description.slice(0, 60)}...</p>
               <div className="bottom">
                  <h3 className="price">${price}</h3>
                  <button onClick={() => handleDetails(id)} className="btn-yatra green">Grab Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Car;