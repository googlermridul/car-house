import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCars from '../../hooks/useCars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import BookCar from '../Shared/BookCar';
import Navigration from '../Shared/Navigration';
import Footer from '../Shared/Footer';

const CarDetails = () => {
   const [cars] = useCars()
   const [details, setDetails] = useState({})
   const {carId} = useParams()
   
   useEffect(() => {
      if (cars.length) {
         const matchedData = cars.find(detail => detail._id === carId)
         setDetails(matchedData);
      }
   }, [cars])

   const {image, name, type, engine, acceleration, torque, power, transmission, year, description} = details;

   return (
      <>
         <Navigration />
         <div className="car-details">
            <div className="container">
               <div className="row mb-5">
                  <div className="col-lg-8 mb-5 mb-lg-0 pe-lg-5">
                     <div className="img-box">
                        <img src={image} className="img-fluid" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-4">
                     {/* <BookPackage car={details}></BookPackage> */}
                     <div className="info">
                        <h3 className="name">{name} <span className="year"> {year}</span></h3>
                        <h5 className="type">{type}</h5>
                        <p className="des">{description}</p>
                        <ul className="px-0">
                           <li><span>Engine: </span>{engine}</li>
                           <li><span>Acceleration: </span>{acceleration}</li>
                           <li><span>Torque: </span>{torque}</li>
                           <li><span>Power: </span>{power}</li>
                           <li><span>Transmission: </span>{transmission}</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <BookCar car={details}></BookCar>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default CarDetails;