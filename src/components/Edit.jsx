import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaIdCard, FaDesktop, FaDeskpro, FaTransgender, FaGenderless, FaMale, FaCalendar } from "react-icons/fa";
import "../App.css"
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {employee} = state;
  const baseURL = "http://localhost:7000/editempbyid";
  const { employeeId } = useParams();
  const [employeeName, setEmployeeName] = useState(employee.employeeName);
  const [department, setDepartment] = useState(employee.department);
  const [designation, setDesignation] = useState(employee.designation);
  const [gender, setGender] = useState(employee.gender);
  const [dateofbirth, setdateofbirth] = useState(employee.dateofbirth);
  const [dateofjoining, setDateofjoining] = useState(employee.dateofjoining);
  const [password, setPassword] = useState(employee.password);
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('');
    
  const employeeNameChangeHandler = (event) => {
    setEmployeeName(event.target.value);
  };

  const departmentChangeHandler = (event) => {
    setDepartment(event.target.value);
  };
  const designationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };
  const dateofbirthChangeHandler = (event) => {
    setdateofbirth(event.target.value);
  };
  const dateofjoiningChangeHandler = (event) => {
    setDateofjoining(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };



  const submitActionHandler = (event) => {
    console.log(
      {
        employeeId: employeeId,
        employeeName: employeeName,
        department: department,
        designation: designation,
        gender: gender,
        dateofbirth: dateofbirth,
        dateofjoining: dateofjoining,
        password: password
      }
    )
    event.preventDefault();
    axios
      .put(baseURL, {
        employeeId: employeeId,
        employeeName: employeeName,
        department: department,
        designation: designation,
        gender: gender,
        dateofbirth: dateofbirth,
        dateofjoining: dateofjoining,
        password: password
      })
      .then((response) => {
        // alert(response.data.employeeName);
        console.log(response.data);
        // alert("Employee " + employeeName + " added!");
        setShowToastSuccess(true);
        setToastMessage("Employee edited successfully");
        setTimeout(() => {
          navigate('/viewemployees');
        }, 3000);

      }).catch(error => {
        setShowToastFail(true)
        setToastMessage("Cannot delete employee");;
      });

  };

  const cancelHandler = () => {
    //reset the values of input fields
    setEmployeeName('');
    setDesignation('');
    setDepartment('');
    setGender('');
    setdateofbirth('');
    setDateofjoining('');
    setPassword('');
    // navigate("/read");

  }
  return (

    <div className='addEmployee'>

      <form onSubmit={submitActionHandler}>
        <h2 className="title">Edit Employee</h2>



        <div className='input-field'>
          <i className="fas fa-user">
            <FaUser style={{ color: "#121212" }} />
          </i>
          <input type="text" value={employeeName} onChange={employeeNameChangeHandler} name="employeeName" />{employee.employeeName}</div>

        <div className='input-field'>
          <i className="fas fa-desktop">
            <FaDesktop style={{ color: "#121212" }} />
          </i>
          <input type="text" value={department} onChange={departmentChangeHandler} placeholder="Department" required /></div>


        <div className='input-field'>
          <i className="fas fa-deskpro">
            <FaDeskpro style={{ color: "#121212" }} />
          </i>
          <input type="text" value={designation} onChange={designationChangeHandler} placeholder="Designation" required /></div>
        <div className='input-field'>
          <i className="fas fa-male">
            <FaMale style={{ color: "#121212" }} />
          </i>
          <input type="text" value={gender} onChange={genderChangeHandler} placeholder="Gender" required /></div>
        <div className='input-field'>
          <i className="fas fa-calendar">
            <FaCalendar style={{ color: "#121212" }} />
          </i>
          <input type="date" value={dateofbirth} onChange={dateofbirthChangeHandler} placeholder="Date of Birth" required /></div>
        <div className='input-field'>
          <i className="fas fa-calendar">
            <FaCalendar style={{ color: "#121212" }} />
          </i>
          <input type="date" value={dateofjoining} onChange={dateofjoiningChangeHandler} placeholder="Date of Joining" required /></div>
        <div className='input-field'>
          <i className="fas fa-lock">
            <FaLock style={{ color: "#121212" }} />
          </i>
          <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Password" required /></div>

        <button type='submit' className="loginButton transparent">Edit Employee</button>
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
export default Edit;
