import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-3 pe-sm-5">
                  <h4>About Car House</h4>
                  <p>Car House Limited inaugurated in 1991 and has been importing brand new and reconditioned vehicles. We will try to serve you with the best products.</p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Useful Links</h4>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/home">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/services">Services</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/about">About Us</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/appointment">Appointment</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Socials</h4>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/">Facebook</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/">Instagram</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/">Twitter</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Contact Us</h4>
                  <div className="d-flex">
                     <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                     <p>Plot:04, Block: N.W(J), Kemal Ataturk Avenue, Gulshan-2, Dhaka</p>
                  </div>
                  <div className="d-flex align-items-top">
                     <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                     <p>01674-757181</p>
                  </div>
                  <div className="d-flex align-items-top">
                     <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                     <p>info@carhousebd.com</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;