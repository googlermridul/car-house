import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../images/menu.png'
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faThList , faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigration = () => {
   const {user, logOut} = useAuth()
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <nav className="navbar navbar-expand-md fixed-top shadow-sm">
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
                     <Link className="link" to="/about">About</Link>
                  </li>
                  {
                     // user.email &&
                     <li className="nav-item">
                        <Link className="link" to="/myPackages">My Packages</Link>
                     </li>
                  }
                  <li className="nav-item">
                     <Link className="link" to="/contact">Contact</Link>
                  </li>
               </ul>
               <span className="navbar-text">
                  {
                     user.email ? 
                     <>
                        <Button
                           className="btn-yatra green mui-green"
                           id="basic-button"
                           aria-controls="basic-menu"
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                           >
                           Dashboard
                        </Button>
                        <Menu
                           id="basic-menu"
                           anchorEl={anchorEl}
                           open={open}
                           onClose={handleClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                           >
                           <MenuItem className="link">
                              <FontAwesomeIcon className="fa-icon" icon={faUser} />{user.email && <span className="name">{user.displayName}</span>}
                           </MenuItem>
                           <MenuItem className="link">
                              <Link className="link" to="/addPackage">
                                 <FontAwesomeIcon className="fa-icon" icon={faThLarge} />Add Package
                              </Link>
                           </MenuItem>
                           <MenuItem className="link">
                              <Link className="link" to="/manageBookings">
                                 <FontAwesomeIcon className="fa-icon" icon={faThList} />Manage All Bookings
                              </Link>
                           </MenuItem>
                           <MenuItem className="link" onClick={logOut}><FontAwesomeIcon className="fa-icon" icon={faSignOutAlt} />Logout</MenuItem>
                        </Menu>
                     </> :
                     <Link className="link" to="/login">
                        <button className="btn-yatra green">Login</button>
                     </Link>
                  }
               </span>
            </div>
         </div>
      </nav>
   );
};

export default Navigration;