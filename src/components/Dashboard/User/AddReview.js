import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import userImage from '../../../images/profile.png'

const AddReview = () => {
   const { user } = useAuth()

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      data.image = user.photoURL || userImage;

      fetch(`https://immense-hamlet-59638.herokuapp.com/addReview`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         if (result.insertedId) {
            alert('Review added successfully')
            reset()
         }
      })
   };

   return (
      <div className="login add-package">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="login-box shadow">
                     <h3>Give us a Review</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
                        <div className="row">
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />
                              {errors.name && <span className="error">name is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("rating", { required: true })} type="number" placeholder="Rating out of 5" />
                              {errors.rating && <span className="error">rating is required</span>}
                           </div>
                           <div className="col-12">
                              <textarea cols="30" rows="10" className="form-control shadow-sm text-area" defaultValue="" {...register("comment", { required: true })} placeholder="Your review" />
                              {errors.comment && <span className="error">comment is required</span>}
                           </div>
                        </div>
                        <button type="submit" className="btn-car shadow-sm">Submit</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddReview;