import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const Delete = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/deleteempbyid`;
  const  {employeeId}  = useParams();

  const submitActionHandler = (event) => {
    console.log(
        {employeeId}
    )
    event.preventDefault();
    axios
      .delete(baseURL, {params: { employeeId: employeeId}})
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        navigate("/viewemployees");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    
   // navigate("/read");

  }
    return(
      
      
      <form onSubmit={submitActionHandler}>
        
        <h3>Do you want to delete this employee?</h3>
        <button type='submit'>Yes</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>No</button> 
      </form>

    
    
    );
}
export default Delete;
