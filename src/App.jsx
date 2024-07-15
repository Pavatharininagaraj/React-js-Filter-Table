import './App.css';
import { useState } from 'react';
import { data } from './data.js';
function App() {
  const [search, setSearch]=useState("");
  return (
    
     <div className='container mt-5'>
      <h3 className='text-primary'>Filter Table Data</h3>
      <form className='col-md-6' > <input type="text" 
      className="form-control"
      placeholder="search..." 
      onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <table className='table table-bordered table-striped mt-3'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>First_name</th>
            <th>Last_name</th>
            <th>E-mail</th>
            <th>Gender</th>
            <th>Phone_number</th>
          </tr>
        </thead>
        <tbody>
          {
            data
            .filter((item)=>{
              return search===""?item:
              item.first_name.toLowerCase().includes(search.toLowerCase())||
              item.last_name.toLowerCase().includes(search.toLowerCase())||
              item.email.toLowerCase().includes(search.toLowerCase())||
              item.gender.toLowerCase().includes(search.toLowerCase())||
              item.phone_number.includes(search);
             })
            .map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone_number}</td>
              </tr>
                 
            ))
          }
        </tbody>
      </table>
     
     </div>
  
  );
}

export default App;
