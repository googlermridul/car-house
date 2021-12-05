import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/Shared/NotFound';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import AuthProvider from './contexts/AuthProvider';
import CarDetails from './components/Home/CarDetails';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Shared/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <PrivateRoute path="/car/:carId">
            <CarDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;


// client side code: https://github.com/programming-hero-web-course-4/niche-website-client-side-googlermridul
// server side code: https://github.com/programming-hero-web-course-4/niche-website-server-side-googlermridul
// live link: https://car-house-imports.web.app/