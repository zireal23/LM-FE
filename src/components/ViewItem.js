import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
// import "../App.css";
import "./ViewItem.css"


const ViewItem = () => {
  const employeeID = sessionStorage.getItem("employeeID");
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchItemsofUser?employeeId=${employeeID}`;
  const [itemArray, setItemArray] = useState([]);

  // const setItemData = () => {
    
  // }

  useEffect(() => {
    axios.get(baseURL ).then((response) => {
      setItemArray(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
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
                    <th>Item ID</th>
                    <th>Item Category</th>
                    <th>Item Description</th>
                    <th>Item Make</th>
                    <th>Item Status</th>
                    <th>Item Valuation</th>
                    

                  </tr>
                </thead>
                <tbody>

                  {
                    
                    itemArray.map((item, index) => (

                      <tr>
                        <th scope="row">{item.itemId}</th>
                        <td>{item.itemCategory}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.itemMake}</td>
                        <td>{item.itemStatus}</td>
                        <td>{item.itemValuation}</td>
                                              


                        
                          


                          

                        
                      </tr>

                    ))
                  }

                </tbody>
              </table>


              {/* <select >
              {
              itemArray.map((i, index) => (
              <option key={i.itemId} value={i.itemId}>{i.itemCategory}</option>
                   
                  
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
export default ViewItem;