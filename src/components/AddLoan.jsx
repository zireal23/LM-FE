import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCashRegister, FaClock } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
// import { Toast, ToastContainer } from 'react-bootstrap';

//import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddLoan = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/saveLoan";
  const [loanId, setLoanId] = useState('');
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState('');
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  // const notify = () => toast("Success");

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
        duration: duration
      })
      .then((response) => {
        console.log(response.data);
        setShowToastSuccess(true)
        setToastMessage("Loan added successfully")
        // navigate("/fetchloancard");

      }).catch(error => {
        // alert("error===" + error);
        setShowToastFail(true)
        setToastMessage("Loan addition failed");
      });

  };

  const cancelHandler = () => {
    //reset the values of input fields
    setLoanId('');
    setLoanType('');
    setDuration('');
    // navigate("/read");

  }
  return (




    <div className='addEmployee'>

      <form onSubmit={submitActionHandler}>
        <h2 className="title">Add Loan</h2>



        <div className='input-field'>
          <i className="fas fa-cash-register">
            <FaCashRegister style={{ color: "#121212" }} />
          </i>
          <input type="number" value={loanId} onChange={loanIdChangeHandler} placeholder="Loan ID" required /></div>


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



        <button type='submit' className="btn solid">Add Loan</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="btn solid" onClick={() => cancelHandler()}>Cancel</button>

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
export default AddLoan;
