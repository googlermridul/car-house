import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCars from '../../hooks/useCars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const CarDetails = () => {
   const [cars] = useCars()
   const [details, setDetails] = useState({})
   const {carId} = useParams()
   
   useEffect(() => {
      if (cars.length) {
         const matchedData = cars.find(detail => detail.id === parseInt(carId))
         setDetails(matchedData);
      }
   }, [cars])

   const {image, name, description} = details;

   return (
      <div className="car-details">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mb-5 mb-lg-0 pe-lg-5">
                  <div className="img-box mb-3">
                     <img src={image} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="info">
                     <h3>{name}</h3>
                     <p className="description">{description}</p>
                     <p className="date-place">
                        <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} /> {name}
                     </p>
                     <p className="date-place mb-0">
                        {/* <FontAwesomeIcon className="fa-icon" icon={faCalendar} /> {date} */}
                     </p>
                  </div>
               </div>
               <div className="col-lg-4">
                  {/* <BookPackage car={details}></BookPackage> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CarDetails;