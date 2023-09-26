import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaCashRegister , FaClock } from "react-icons/fa";
import "../App.css";

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
      
      
      <div className='addEmployee'>

      <form onSubmit={submitActionHandler}>
        <h2 className="title">Edit Loan</h2>



        <div className='input-field'>
          <i className="fas fa-cash-register">
            <FaCashRegister style={{ color: "#121212" }} />
          </i>
          <input type="text" value={loanType} onChange={loanTypeChangeHandler} placeholder="Loan Type" required /></div>

        <div className='input-field'>
          <i className="fas fa-clock">
            <FaClock style={{ color: "#121212" }} />
          </i>
          <input type="text" value={duration} onChange={durationChangeHandler} placeholder="Duration" required /></div>



        <button type='submit' className="btn solid">Edit Loan</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="btn solid" onClick={() => cancelHandler()}>Cancel</button>

      </form>

    </div>

    
    );
}
export default EditLoan;
