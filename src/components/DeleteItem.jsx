import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
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
      
      <div className='addEmployee'>
      
      <form onSubmit={submitActionHandler}>
        
        <h3 className='del'>Do you want to delete this item?</h3>
        <button type='submit' className="btn solid">Yes</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="btn solid" onClick={()=>cancelHandler()}>No</button> 
      </form>

      </div>

    
    
    );
}
export default DeleteItem;
