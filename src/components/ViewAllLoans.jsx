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
      // alert("Error Occurred while loading data: " + error);
      navigate('/error');
    });
  }, []);

  return (
    <div className="tablecontainer">
      <h3 className="tableheading">Loan List</h3>
      <div className="table table-responsive table-dark table-borderless">
            {loanArray.length === 0 ? (
                <p className='noItemsToView'>No loans to be shown</p>
              ) : (
                <table className = "loantable">
                  <thead>
                    <tr>
                      <th>Loan ID</th>                    
                      <th>Loan Type</th>
                      <th>Duration (in years)</th>
                      <th scope="col">Action</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loanArray.map((loanItem, index) => (
                      <tr className='viewAllLoansTableContents' key={index}>
                        <td>{loanItem.loanId}</td>
                        <td>{loanItem.loanType}</td>
                        <td>{loanItem.duration}</td>  
                        <td><Link to={`/editloan/${loanItem.loanId}/${loanItem.loanType}` }><button className='loginButton transparent'>Edit</button>
                          </Link></td>
                        <td><Link to={`/deleteloan/${loanItem.loanId}`} className='delete-link'><button className='loginButton transparent'>Delete</button>
                          </Link></td>    
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            
              <div className='viewAllLoansButtonDiv'>
                <button className='viewAllLoansButton'
                  onClick={() => navigate("/addloan")}>
                  Create New Loan
                </button>
              </div>
              
           
          
        </div>

        <div className="adminredirect" onClick={() => navigate("/admindashboard")}>
          &lt; &lt; Go to admin dashboard
        </div>
      </div>
   
  );
};

export default ViewAllLoans;
