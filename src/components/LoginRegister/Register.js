import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google1.png'

const Register = () => {
   const {setUser, error, setError, signInWithGoogle, signUpWithEmail, getName, getEmail, getPassword, updateUserName} = useAuth()
   const location = useLocation()
   const history = useHistory()
   const redirectUrl = location.state?.from || '/'

   const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(res => {
         setUser(res.user)
         setError('');
         history.push(redirectUrl)
      })
      .catch(err => {
         setError(err.message);
         // console.log(err.message);
      });
   }

   const handleRegistration = (e) => {
      e.preventDefault();

      signUpWithEmail()
      .then(res => {
         setUser(res.user)
         setError('');
         updateUserName()
         history.push(redirectUrl)
      })
      .catch(err => {
         setError(err.message);
         // console.log(err.message);
      });
   }

   return (
      <div className="login">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="login-box shadow">
                     <h3>Sign in to Car House</h3>
                     <form onSubmit={handleRegistration}>
                        <div className="form-group">
                           <input onBlur={getName} type="name" className="form-control shadow-sm" placeholder="Full Name" required />
                        </div>
                        <div className="form-group">
                           <input onBlur={getEmail} type="email" className="form-control shadow-sm" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                           <input onBlur={getPassword} type="password" className="form-control shadow-sm" id="password"  placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn-car shadow-sm">Submit</button>
                     </form>
                     <hr />
                     <div className="text-center">
                        <p className="firebase-error">{error}</p>
                        <button onClick={handleGoogleSignIn} className="btn-car google-btn shadow-sm"><img src={googleIcon} alt="" /> Signin With Google</button>
                        <p className="switcher">Already an user? <Link className="link" to="/login">Login</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;