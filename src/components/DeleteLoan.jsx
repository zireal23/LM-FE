import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const DeleteLoan = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/deleteloanbyid`;
  const  {loanId}  = useParams();

  const submitActionHandler = (event) => {
    console.log(
        {loanId}
    )
    event.preventDefault();
    axios
      .delete(baseURL, {params: { loanId: loanId}})
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        navigate("/fetchloancard");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    
   // navigate("/read");

  }
    return(
      
      
      <div className='addEmployee'>
      
      <form onSubmit={submitActionHandler}>
        
        <h3 className='del'>Do you want to delete this loan?</h3>
        <button type='submit' className="loginButton transparent">Yes</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="loginButton transparent" onClick={()=>cancelHandler()}>No</button> 
      </form>

      </div>
    
    
    );
}
export default DeleteLoan;
