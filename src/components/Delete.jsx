import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const Delete = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:7000/deleteempbyid`;
  const  {employeeId}  = useParams();
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastFail, setShowToastFail] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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
        setShowToastSuccess(true);
        setToastMessage("Employee deleted");
        setTimeout(()=>{

          navigate("/viewemployees");
        },3000);
        
      }).catch(error => {
        setShowToastFail(false);
        setToastMessage("Employee not deleted");
        setTimeout(()=>{

          navigate("/viewemployees");
        },3000);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    
   // navigate("/read");

  }
    return(
      
      <div className='addEmployee'>
      
      <form onSubmit={submitActionHandler}>
        
        <h3 className='del'>Do you want to delete this employee?</h3>
        <button type='submit' className="loginButton transparent">Yes</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="loginButton transparent" onClick={()=>cancelHandler()}>No</button> 
      </form>
      <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }}>

      <Toast show={showToastFail} onClose={() => setShowToastFail(false)} delay={3000} autohide bg="danger" style={{color:"#fff", backgroundColor:"#CA0800", padding:"2em"}}>
   
        <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
   </ToastContainer>
   <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }} >
   
     <Toast show={showToastSuccess} onClose={() => setShowToastSuccess(false)} delay={3000} autohide bg='success' style={{color:"#fff", backgroundColor:"#28A745", padding:"2em"}}>
       <Toast.Body>{toastMessage}</Toast.Body>
     </Toast>
   </ToastContainer>
      </div>
    
    );
}
export default Delete;
