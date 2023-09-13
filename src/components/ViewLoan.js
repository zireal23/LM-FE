import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
import "../App.css";


const ViewLoans = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchLoans";
  const [loan, setLoan] = useState([]);

  const setLoanData = () => {
    axios.get(baseURL ).then((response) => {
      setLoan(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setLoanData();
  }, []);

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Loan
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4> Loans</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>loan_id</th>
                    <th>duration</th>
                    <th>card_issue_date</th>
                    <th>loan_type</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    
                    loan.map((loan, index) => (

                      <tr>
                        <th scope="row">{loan.loanId}</th>
                        <td>{loan.duration}</td>
                        <td>{loan.issueDate}</td>
                        <td>{loan.loanType}</td>
                                              


                        <td >
                        

     <Link to={"/edit/" + loan.loanId}>Edit
                        </Link> 


                       
                       

                      </td>
                          


                          

                        
                      </tr>

                    ))
                  }

                </tbody>
              </table>


              <select >
              {
              loan.map((l, index) => (
              <option key={l.loanId} value={l.loanId}>{l.loanType}</option>
                   
                  
                ))
                  }
              </select>

            </div>
          </div>
        </div>
        
      </div>

    </div>

  );
}
export default ViewLoans;