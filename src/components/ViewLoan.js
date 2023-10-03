import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from './Sidebar'
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const ViewLoans = () => {
  
  const employeeID = sessionStorage.getItem("employeeID");
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/fetchLoans?employeeId=${employeeID}`;
  const [loanArray, setLoanArray] = useState([]);
  // const nodata = "No data to be shown";
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  // const setLoanData = () => {
    
  // }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoanArray(response.data);
      console.log(response.data);
    }).catch(error => {
      // alert("Error Occurred while loading data: " + error);
      // navigate('/error');
      // setShowToastFail(true)
      // setToastMessage("No data to be shown");
      setTimeout(() => {
        navigate('/userdashboard');
      }, 3000);
    });
  }, []);

  return (
    <div className="tablecontainer">
      <Sidebar />
      
      <h3 className="tableheading">Loan List</h3>
      <div className="table table-responsive table-dark table-borderless">
      {loanArray.length === 0 ? (
                <p Style="margin-left: 20%">No loans to be shown</p>
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
      
      <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }}>

         <Toast show={showToastFail} onClose={() => setShowToastFail(false)} delay={3000} autohide bg="danger" style={{color:"#fff", backgroundColor:"#f0f0f0", padding:"2em"}}>

           <Toast.Body>{toastMessage}</Toast.Body>
       </Toast>
      </ToastContainer>
      
      

    </div>
  );
};

export default ViewLoans;
