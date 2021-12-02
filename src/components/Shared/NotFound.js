import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/page_not_found3.svg'

const NotFound = () => {
   return (
      <div className="not-found">
         <div className="container text-center">
            <div className="row">
               <div className="col">
                  <img className="img-fluid" src={notFound} alt="" />
                  <h3>Ohh! Page Not Found</h3>
                  <Link className="link" to="/home">Back to home</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFound;