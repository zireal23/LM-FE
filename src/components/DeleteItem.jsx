import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
import './AddEmployee.css'
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const DeleteItem = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/deleteitembyid`;
  const  {itemId}  = useParams();

  const submitActionHandler = (event) => {
    console.log(
        {itemId}
    )
    event.preventDefault();
    axios
      .delete(baseURL, {params: { itemId: itemId}})
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        navigate("/viewitems");
        
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
        
           
        <button type='submit'>Yes</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>No</button> 
      </form>

    
    
    );
}
export default DeleteItem;
