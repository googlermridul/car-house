import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faThList , faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
   return (
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="link" to="/manageBookings">
                <FontAwesomeIcon className="fa-icon" icon={faThLarge} /> Add Car
              </Link>
            </li>
          </ul>
        </div>
      </nav>
   );
};

export default Sidebar;