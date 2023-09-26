import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

//import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddLoan = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/saveLoan";
  const [loanId, setLoanId] = useState('');
  const [loanType, setLoanType] = useState('');
  const[duration,setDuration]=useState('');


  const loanIdChangeHandler = (event) => {
    //alert(event.target.value);
    setLoanId(event.target.value);
  };

  const loanTypeChangeHandler = (event) => {
    setLoanType(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };
  

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        loanId: loanId,
        loanType: loanType,
        duration:duration
      })
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        alert("Loan "+ loanType +" added!");
        navigate("/fetchloancard");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setLoanId('');
    setLoanType('');
    setDuration('');
   // navigate("/read");

  }
    return(
      
      
      <form onSubmit={submitActionHandler}>
        
            Loan ID:
            <input type="text" value={loanId} onChange={loanIdChangeHandler} placeholder="Enter Loan ID" required/><br></br>
        
            Loan Type :
        <input type="text" value={loanType} onChange={loanTypeChangeHandler} placeholder="Enter name" required/><br></br>
        Duration:
        <input type="text" value={duration} onChange={durationChangeHandler} placeholder="Enter department" required/><br></br>
        <br></br>
        <button type='submit'>Add Loan</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Cancel</button> 
      </form>

    
    
    );
}
export default AddLoan;
