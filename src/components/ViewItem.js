import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
import "../App.css";


const ViewItem = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchItems";
  const [item, setItem] = useState([]);

  const setItemData = () => {
    axios.get(baseURL ).then((response) => {
      setItem(response.data);
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
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Item
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4> Item</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Item_id</th>
                    <th>Item_Category</th>
                    <th>Item_Description</th>
                    <th>Item_Make</th>
                    <th>Item_Status</th>
                    <th>Item_Valuation</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    
                    item.map((item, index) => (

                      <tr>
                        <th scope="row">{item.itemId}</th>
                        <td>{item.itemCategory}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.itemMake}</td>
                        <td>{item.itemStatus}</td>
                        <td>{item.itemValuation}</td>
                                              


                        <td >
                        

     <Link to={"/edit/" + item.itemId}>Edit
                        </Link> 


                       
                       

                      </td>
                          


                          

                        
                      </tr>

                    ))
                  }

                </tbody>
              </table>


              <select >
              {
              item.map((i, index) => (
              <option key={i.itemId} value={i.itemId}>{i.itemCategory}</option>
                   
                  
                ))
                  }
              </select>

            </div>
          </div>
        </div>
        
      </div>

    </div>

  );
}
export default ViewItem;