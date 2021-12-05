import React from 'react';
import { useForm } from "react-hook-form";

const AddCar = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   const onSubmit = data => {
      fetch(`https://immense-hamlet-59638.herokuapp.com/addCar`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         if (result.insertedId) {
            alert('Car added successfully')
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
                     <h3>Add New Car</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
                        <div className="row">
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("name", { required: true })} placeholder="Name (AMG G 63 SUV)" />
                              {errors.name && <span className="error">name is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("image", { required: true })} placeholder="Image URL" />
                              {errors.image && <span className="error">image is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("type", { required: true })} placeholder="Car Type (SUV)" />
                              {errors.type && <span className="error">type is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("price", { required: true })} placeholder="Price (156450)" />
                              {errors.price && <span className="error">price is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("year", { required: true })} placeholder="Manufactured Year (2021)" />
                              {errors.year && <span className="error">year is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("engine", { required: true })} placeholder="Engine (4.0l)" />
                              {errors.engine && <span className="error">engine is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("acceleration", { required: true })} placeholder="Acceleration (4.5 sec)" />
                              {errors.acceleration && <span className="error">acceleration is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("power", { required: true })} placeholder="Power (577 hp)" />
                              {errors.power && <span className="error">power is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("torque", { required: true })} placeholder="Torque (627 lb-ft)" />
                              {errors.torque && <span className="error">torque is required</span>}
                           </div>
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("transmission", { required: true })} placeholder="Transmission (Manual)" />
                              {errors.transmission && <span className="error">transmission is required</span>}
                           </div>
                           <div className="col-12">
                              <textarea cols="30" rows="10" className="form-control shadow-sm text-area" defaultValue="" {...register("description", { required: true })} placeholder="Description" />
                              {errors.description && <span className="error">description is required</span>}
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

export default AddCar;