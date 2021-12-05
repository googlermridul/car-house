import React from 'react';
import './Dashboard.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faThList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import NotFound from '../Shared/NotFound';
import TopHeader from './TopHeader';
import ManageOrders from './Admin/ManageOrders';
import ManageCars from './Admin/ManageCars';
import MakeAdmin from './Admin/MakeAdmin';
import AddCar from './Admin/AddCar';
import MyOrders from './User/MyOrders';
import AddReview from './User/AddReview';
import Pay from './User/Pay';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const {admin, logOut} = useAuth()

   return (
      <>
        <TopHeader />
        
        <div className="container-fluid">
          <div className="row">

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky">
                <ul className="nav flex-column">
                  {
                    admin ?
                    <>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/addCar`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThLarge} /> Add Car
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/manageCars`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThLarge} /> Manage Cars
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/manageOrders`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThLarge} /> Manage Orders
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/makeAdmin`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThLarge} /> Make Admin
                        </Link>
                      </li>
                    </> :
                    <>
                      <li className="nav-item">
                        <Link className="link" to={`${url}`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThList} /> Dashboard
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/pay`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThList} /> Pay
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/myOrders`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThList} /> My Orders
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="link" to={`${url}/addReview`}>
                          <FontAwesomeIcon className="fa-icon" icon={faThList} /> Add Review
                        </Link>
                      </li>
                    </>
                  }
                  <li className="nav-item">
                    <span className="link" style={{cursor: 'pointer'}} onClick={logOut}>
                      <FontAwesomeIcon className="fa-icon" icon={faSignOutAlt} /> Logout
                    </span>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 p-0 main">
              
              <Switch>
                <Route exact path={path}>
                  <h1>Dashboard</h1>
                </Route>
                <Route path={`${path}/myOrders`}>
                  <MyOrders />
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay />
                </Route>
                <Route path={`${path}/addReview`}>
                  <AddReview />
                </Route>
                <Route path={`${path}/addCar`}>
                  <AddCar />
                </Route>
                <Route path={`${path}/manageCars`}>
                  <ManageCars />
                </Route>
                <Route path={`${path}/manageOrders`}>
                  <ManageOrders />
                </Route>
                <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>

            </main>
          
          </div>
        </div>
      </>
   );
};

export default Dashboard;