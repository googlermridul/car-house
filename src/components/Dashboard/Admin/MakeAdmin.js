import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      fetch(`https://immense-hamlet-59638.herokuapp.com/makeAdmin`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         if (result.insertedId) {
            alert('Admin added successfully')
            reset()
         }
      })
   };

   return (
      <div className="login add-package make-admin">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="login-box shadow">
                     <h3>Make an admin</h3>
                     <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
                        <div className="row">
                           <div className="form-group col-md-6">
                              <input className="form-control shadow-sm" defaultValue="" {...register("email", { required: true })} type="email" placeholder="Email" />
                              {errors.email && <span className="error">email is required</span>}
                           </div>
                        </div>
                        <button type="submit" className="btn-car shadow-sm">Make Admin</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MakeAdmin;
{/* <div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">@example.com</span>
</div> */}