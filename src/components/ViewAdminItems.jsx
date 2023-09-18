import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
import "../App.css";
import "./ViewAdminItems.css";


const ViewAdminItems= () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchItems";
  const[items, setItems] = useState([]);

  const setItemData = () => {
    axios.get(baseURL ).then((response) => {
      setItems(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setItemData();
  }, []);

  return (
    <div class="card-body">
      <br>
      </br>
      {/* <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Employee
        </button>
      </nav> */}


      <br></br>
      <div className="col-md-6">
        <h4>Item List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Category</th>
                    <th>Item Description</th>
                    <th>Item Make</th>
                    <th>Item Status</th>
                    <th>Item Valuation</th>
                    
                    
                    <th scope="col">Action</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    
                    items.map((items, index) => (

                      <tr>
                        <th scope="row">{items.itemId}</th>

                        <td>{items.itemCategory}</td>
                        <td>{items.itemDescription}</td>
                        <td>{items.itemMake}</td>
                        <td>{items.itemStatus}</td>
                        <td>{items.itemValuation}</td>
                        
                        <td><Link to={"/edit/" +items.itemId}>Edit
                        </Link></td>
                        <td><Link to={"/delete/" + items.itemId}>Delete
                        </Link></td>


                        <td >
                        

    
    


                       
                       

                      </td>
                          


                          

                        
                      </tr>

                    ))
                  }

                </tbody>
              </table>


              {/* <select >
              {
              students.map((s, index) => (
              <option key={s.regno} value={s.regno}>{s.name}</option>
                   
                  
                ))
                  }
              </select> */}

            </div>
          </div>
        </div>
        
      </div>

    </div>

  );
}
export default ViewAdminItems;