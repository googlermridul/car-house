import React, { useEffect, useState } from 'react';

const ManageCars = () => {
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch('https://immense-hamlet-59638.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [packages])

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete')
      if (proceed) {
         fetch(`https://immense-hamlet-59638.herokuapp.com/deleteCar/${id}`, {
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
                     <h3>Manage All Cars</h3>
                     <table className="table mb-0">
                        <thead>
                           <tr>
                              <th scope="col">Car Name</th>
                              <th scope="col">Year</th>
                              <th scope="col">Engine</th>
                              <th scope="col">Price</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              packages.map(pk => (
                                 <tr key={pk._id}>
                                    <td>{pk.name}</td>
                                    <td>{pk.year}</td>
                                    <td>{pk.engine}</td>
                                    <td>{pk.price}</td>
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

export default ManageCars;