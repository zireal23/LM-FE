import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditLoan = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/editloanbyid";
  const { loanId } = useParams();
  const [loanType, setLoanType] = useState('');
  const[duration,setDuration]=useState('');


  const loanTypeChangeHandler = (event) => {
    setLoanType(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };
  const submitActionHandler = (event) => {
    console.log(
        {loanId: loanId,
            loanType: loanType,
            duration:duration}
    )
    event.preventDefault();
    axios
      .put(baseURL, {
        loanId: loanId,
        loanType: loanType,
        duration:duration
      })
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        alert("Loan "+ loanType +" updatd!");
        navigate("/fetchloancard");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setLoanType('');
    setDuration('');
   // navigate("/read");

  }
    return(
      
      
      <form onSubmit={submitActionHandler}>
        
            Loan Type :
        <input type="text" value={loanType} onChange={loanTypeChangeHandler} placeholder="Enter name" required/><br></br>
        Duration:
        <input type="text" value={duration} onChange={durationChangeHandler} placeholder="Enter department" required/><br></br>
        <br></br>
        <button type='submit'>Edit Loan</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Cancel</button> 
      </form>

    
    
    );
}
export default EditLoan;
