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
                    
                    items.map((items, index) => (

                      <tr>
                        <th scope="row">{items.itemId}</th>

                        <td>{items.itemCategory}</td>
                        <td>{items.itemDescription}</td>
                        <td>{items.itemMake}</td>
                        <td>{items.itemStatus}</td>
                        <td>{items.itemValuation}</td>
                        
                        <td><Link to={"/edititems/" +items.itemId}className='edit-link'><button className='loginButton transparent'>Edit</button>
                        </Link></td>
                        <td><Link to={"/deleteitems/" + items.itemId} className='delete-link'><button className='loginButton transparent'>Delete</button>
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