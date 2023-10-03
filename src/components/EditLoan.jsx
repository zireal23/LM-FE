import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaCashRegister , FaClock } from "react-icons/fa";
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

const EditLoan = () => {
  const navigate = useNavigate();
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const baseURL = "http://localhost:7000/editloanbyid";
  const { loanId, loanType } = useParams();
  
  const[duration,setDuration]=useState('');


  const loanTypeChangeHandler = (event) => {
  
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
        setShowToastSuccess(true)
          setToastMessage("Loan edited successfully")
          setTimeout(() => {
            navigate('/fetchloancard');
          }, 3000);
        
      }).catch(error => {
        setShowToastFail(true)
          setToastMessage("Loan edit failed");
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields

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
          <input type="text" value={loanType} onChange={loanTypeChangeHandler} placeholder={loanType} required readOnly /></div>

        <div className='input-field'>
          <i className="fas fa-clock">
            <FaClock style={{ color: "#121212" }} />
          </i>
          <input type="text" value={duration} onChange={durationChangeHandler} placeholder="Duration" required /></div>



        <button type='submit' className="loginButton transparent">Edit Loan</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="loginButton transparent" onClick={() => cancelHandler()}>Cancel</button>

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
export default EditLoan;
