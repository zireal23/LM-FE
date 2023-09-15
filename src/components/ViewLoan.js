import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./ViewItem.css";

const ViewLoans = () => {
  const employeeID = sessionStorage.getItem("employeeID");
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchLoans?employeeId=${employeeID}`;
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
        <h4>${employeeID}</h4>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Loan ID</th>                    
                    <th>Loan Type</th>
                    <th>Duration (in years)</th>
                    <th>Card Issue Date</th> 
                  </tr>
                </thead>
                <tbody>
                  {loanArray.map((loanItem, index) => (
                    <tr key={index}>
                      <td>{loanItem.loanId}</td>
                      <td>{loanItem.loanType}</td>
                      <td>{loanItem.duration}</td>                      
                      <td>{loanItem.card_issue_date}</td>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLoans;
