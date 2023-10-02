import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from './Sidebar'
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
// import "../App.css";


const ViewItem = () => {
  const employeeID = sessionStorage.getItem("employeeID");
  // const employeeName = sessionStorage.getItem("employeeName");
  // const designation = sessionStorage.getItem("designation");
  // const department = sessionStorage.getItem("department");
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchItemsOfUser?employeeId=${employeeID}`;
  const [itemArray, setItemArray] = useState([]);

  // const setItemData = () => {
    
  // }

  useEffect(() => {
    axios.get(baseURL ).then((response) => {
      setItemArray(response.data);
    }).catch(error => {
      // alert("Error Ocurred while loading data:" + error);
      navigate('/error');
    });
  }, []);

  return (
    <div className="tablecontainer">
      <Sidebar />
      
      <h3 className="tableheading">Loan List</h3>
      <div className="table table-responsive table-dark table-borderless">
      {itemArray.length === 0 ? (
                <p>No items to be shown</p>
              ) : (<table className="useritems">
                <thead>
                  <tr>
                    <th>Issue ID</th>
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
                        <td>{item.issue_id}</td>
                        <td>{item.itemCategory}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.itemMake}</td>
                        <td>{item.itemStatus}</td>
                        <td>{item.itemValuation}</td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>)}
              <div className="userredirect" onClick={() => navigate("/userdashboard")}>
          &lt; &lt; Go to user dashboard
      </div>
      </div>
    </div>

  );
}
export default ViewItem;