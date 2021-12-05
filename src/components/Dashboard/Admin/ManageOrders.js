import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch('https://immense-hamlet-59638.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [packages])

   const handleUpdate = id => {
      fetch(`https://immense-hamlet-59638.herokuapp.com/orders/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(packages)
      })
      .then(res => res.json())
      .then(data => {
          if (data.modifiedCount > 0) {
              alert('Approved successfully')
          }
      })
   }

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
      <div className="manage-orders">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="manage-orders-box shadow">
                     <h3>Manage All Orders</h3>
                     <table className="table mb-0">
                        <thead>
                           <tr>
                              <th scope="col">Car</th>
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              packages.map(pk => (
                                 <tr key={pk._id}>
                                    <td>{pk.packageName}</td>
                                    <td>{pk.name}</td>
                                    <td>{pk.phone}</td>
                                    <td>
                                       {
                                          pk.status === 'Pending' ?
                                             <button onClick={() => handleUpdate(pk._id)} className="btn-car sm">Approve</button> :
                                             <button className="btn-car sm approved" disabled>Approved</button>
                                       }
                                    </td>
                                    <td>
                                       <button onClick={() => handleDelete(pk._id)} className="btn-car sm delete">Delete</button>
                                    </td>
                                 </tr>
                              ))
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ManageOrders;