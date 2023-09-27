import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const ViewAllLoans = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchAllLoans`;
  const [loanArray, setLoanArray] = useState([]);

  // const setLoanData = () => {
    
  // }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoanArray(response.data);
      console.log(response.data);
    }).catch(error => {
      alert("Error Occurred while loading data: " + error);
    });
  }, []);

  return (
    <div className="card-body">
      <br></br>
      <div className="col-md-12">
        <h4>Loans</h4>
        <div className="container">
          <div className="row">
            <div className="col-12">
            {loanArray.length === 0 ? (
                <p>No loans to be shown</p>
              ) : (
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Loan ID</th>                    
                      <th>Loan Type</th>
                      <th>Duration (in years)</th>
                      <th scope="col">Action</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    
                      <tr className='viewAllLoansTableContents'>
                        <td>001</td>
                        <td>Furniture</td>
                        <td>3</td>  
                        <td>Edit</td>
                        <td>Delete</td>    
                      </tr>
                    
                  </tbody> */}

                  {/* <tbody>
                    
                      <tr>
                        <td>001</td>
                        <td>Furniture</td>
                        <td>3</td>  
                        <td>Edit</td>
                        <td>Delete</td>    
                      </tr>
                    
                  </tbody> */}
                  <tbody>
                    {loanArray.map((loanItem, index) => (
                      <tr className='viewAllLoansTableContents' key={index}>
                        <td>{loanItem.loanId}</td>
                        <td>{loanItem.loanType}</td>
                        <td>{loanItem.duration}</td>  
                        <td><Link to={`/editloan/${loanItem.loanId}` }>Edit
                          </Link></td>
                        <td><Link to={`/deleteloan/${loanItem.loanId}`}>Delete
                          </Link></td>    
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div id='viewAllLoansButtonDiv'>
                <button id='viewAllLoansButton'
                  onClick={() => navigate("/addloan")}>
                  Create New Loan
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllLoans;
