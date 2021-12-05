import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../images/menu.png'
import useAuth from '../../hooks/useAuth';

const Navigration = () => {
   const {user, logOut} = useAuth()
   
   return (
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
         <div className="container">
            <Link className="link" to="/home">
               <span className="logo">Car House</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/explore">Explore</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/contact">Contact</Link>
                  </li>
                  {
                     user.email &&
                     <li className="nav-item">
                        <span className="link" style={{cursor: 'pointer'}} onClick={logOut}>Logout</span>
                     </li>
                  }
               </ul>
               <span className="navbar-text py-0">
                  {
                     user.email ? 
                     <Link className="link" to="/dashboard">
                        <button className="btn-car sm">Dashboard</button>
                     </Link> :
                     <Link className="link" to="/login">
                        <button className="btn-car sm">Login</button>
                     </Link>
                  }
               </span>
            </div>
         </div>
      </nav>
   );
};

export default Navigration;