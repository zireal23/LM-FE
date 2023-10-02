import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from './Sidebar'

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
      // alert("Error Occurred while loading data: " + error);
      navigate('/error');
    });
  }, []);

  return (
    <div className="tablecontainer">
      <Sidebar />
      
      <h3 className="tableheading">Loan List</h3>
      <div className="table table-responsive table-dark table-borderless">
      {loanArray.length === 0 ? (
                <p>No loans to be shown</p>
              ) :(<table className="useritems">
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
              </table>)}

              <div className="userredirect" onClick={() => navigate("/userdashboard")}>
          &lt; &lt; Go to user dashboard
      </div>
      </div>

      

    </div>
  );
};

export default ViewLoans;
