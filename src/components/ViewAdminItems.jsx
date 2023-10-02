import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";


const ViewAdminItems= () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchItems";
  const[items, setItems] = useState([]);

  const setItemData = () => {
    axios.get(baseURL ).then((response) => {
      setItems(response.data);
    }).catch(error => {
      // alert("Error Ocurred while loading data:" + error);
      navigate('/error');
    });
  }

  useEffect(() => {
    setItemData();
  }, []);

  
  const sendItemData = (item) => {
    navigate(`/edititems/${item.itemId}`, {
      replace: true,
      state: {
        itemid: item.itemid,
        itemdescription: item.itemDescription,
        itemmake: item.itemMake,
        itemcategory: item.itemCategory,
        itemvaluation: item.itemValuation,
        itemstatus: item.itemStatus,
      }
    })
  }

  return (
    <div className="tablecontainer">
      <h3 className="tableheading">Items List</h3>
      <div className="table table-responsive table-dark table-borderless">
        {items.length === 0 ? (
                <p className='noItemsToView'>No items to be shown</p>
              ) : (<table className="itemstable">
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
                    
                    items.map((item, index) => (

                      <tr>
                        <th scope="row">{item.itemId}</th>

                        <td>{item.itemCategory}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.itemMake}</td>
                        <td>{item.itemStatus}</td>
                        <td>{item.itemValuation}</td>
                        
                        <td><button className='loginButton transparent' onClick={()=>{sendItemData(item)}}>Edit</button></td>
                       
                        <td><Link to={`/deleteitem/${item.itemId}`}><button className='loginButton transparent'>Delete</button>
                        </Link></td>   
                      </tr>

                    ))
                  }

                </tbody>
              </table>)}
              <div className='viewAllLoansButtonDiv'>
              <button className='viewAllLoansButton' onClick={() => navigate("/additems")}>
                  Create New Item
              </button>
            </div>

            <div className="adminredirect" onClick={() => navigate("/admindashboard")}>
          &lt; &lt; Go to admin dashboard
      </div>
        </div>
        
      </div>


  );
}
export default ViewAdminItems;