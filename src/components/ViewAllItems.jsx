import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

// import "./ViewEmployees.css";

const ViewAllItems = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchItems`;
  const [itemArray, setItemArray] = useState([]);

  // const setLoanData = () => {
    
  // }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItemArray(response.data);
      console.log(response.data);
    }).catch(error => {
      alert("Error Occurred while loading data: " + error);
    });
  }, []);

  const sendItemData = (item) => {
    console.log(item);
    // navigate(`/edititems/${item.itemId}`, {
    //   replace: true,
    //   state: {
    //     itemid: item.itemid,
    //     itemdescription: item.itemDescription,
    //     itemmake: item.itemMake,
    //     itemcategory: item.itemCategory,
    //     itemvaluation: item.itemValuation,
    //     itemstatus: item.itemStatus,
    //   }
    // })
  }

  return (
    <div className="card-body">
      <br></br>
      <div className="col-md-12">
        <h4>Loans</h4>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Item ID</th> 
                    <th>Item Description</th> 
                    <th>Item Status</th>  
                    <th>Item Make</th>  
                    <th>Item Category</th> 
                    <th>Item Valuation</th>     
                    <th scope="col">Action</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {itemArray.map((item, index) => (
                    <tr className='viewAllLoansTableContents' key={index}>
                      <td>{item.itemId}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.itemMake}</td>
                      <td>{item.itemStatus}</td>  
                      <td>{item.itemCategory}</td>  
                      <td>{item.itemValuation}</td>  
                      <td><button className='loginButton transparent' onClick={()=>{sendItemData(item)}}>Edit</button></td>
                       
                        <td><Link to={`/deleteitems/${item.itemId}`}><button className='loginButton transparent'>Delete</button>
                        </Link></td>    
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <select>
                {loanArray.map((l, index) => (
                  <option key={l.loanId} value={l.loanId}>
                    {l.loanType}
                  </option>
                ))}
              </select> */}
        <div className='viewAllLoansButtonDiv'>
          <button className='viewAllLoansButton'
            onClick={() => navigate("/additem")}>
            Create New Item
          </button>
        </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllItems;
