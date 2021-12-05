import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
   const {user} = useAuth()
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch(`https://immense-hamlet-59638.herokuapp.com/orders/${user.email}`)
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [user])

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete')
      if (proceed) {
         fetch(`https://immense-hamlet-59638.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount) {
               const remaining = packages.filter(pk => pk._id !== id)
               setPackages(remaining)
            }
         })
      }
   }

   return (
      <div className="my-order-section">
         <div className="container">
            <div className="order-section-box">
               <h3>My Orders</h3>
               <div className="row">
                  {
                     packages.map(pk => (                  
                        <div key={pk._id} className="col-lg-6">
                        <div className="order-box">
                           <div className="img-box">
                              <img src={pk.image} className="img-fluid" alt="" />
                           </div>
                           <div className="info">
                              <h4 className="package">{pk.packageName}</h4>
                              <span className={ pk.status === "Pending" ? 'status pending' : 'status approved' }>{pk.status}</span>
                              <p>{pk.email}</p>
                              <div className="bottom">
                                 <span className="date">{pk.date}</span>
                                 <button onClick={() => handleDelete(pk._id)} className="btn-car sm">Cancel</button>
                              </div>
                           </div>
                        </div>
                     </div>))
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;