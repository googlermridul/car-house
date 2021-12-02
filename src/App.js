import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigration from './components/Shared/Navigration';
import Footer from './components/Shared/Footer';
import NotFound from './components/Shared/NotFound';
import Home from './components/Home/Home';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import AuthProvider from './contexts/AuthProvider';
import CarDetails from './components/Home/CarDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigration />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/car/:carId">
            <CarDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
