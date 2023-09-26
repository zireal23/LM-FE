import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaIdCard, FaDesktop, FaDeskpro, FaTransgender, FaGenderless, FaMale, FaCalendar } from "react-icons/fa";

const AddEmployee = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/saveEmployee";
  const [employeeId, setId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');
  const [dateofjoining, setDateofjoining] = useState('');
  const [password, setPassword] = useState('');


  const employeeIdChangeHandler = (event) => {
    //alert(event.target.value);
    setId(event.target.value);
  };

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
    event.preventDefault();
    axios
      .post(baseURL, {
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
        alert("Employee " + employeeName + " added!");
        navigate("/viewemployees");

      }).catch(error => {
        alert("error===" + error);
      });

  };

  const cancelHandler = () => {
    //reset the values of input fields
    setId('');
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

        <h2 className="title">Add Employee</h2>

        <div className='input-field'>
          <i className="fas fa-id-card-o">
            <FaIdCard style={{ color: "#121212" }} />
          </i>
          <input type="text" value={employeeId} onChange={employeeIdChangeHandler} placeholder="Employee ID" required />
        </div>

        <div className='input-field'>
          <i className="fas fa-user">
            <FaUser style={{ color: "#121212" }} />
          </i>
          <input type="text" value={employeeName} onChange={employeeNameChangeHandler} placeholder="Employee Name" required /></div>

        <div className='input-field'>
          <i className="fas fa-desktop">
            <FaDesktop style={{ color: "#121212" }} />
          </i>
          <input type="text" value={department} onChange={departmentChangeHandler} placeholder="Department" required /></div>
        {/* <select>
          <option value={department} onChange={departmentChangeHandler}>Option1</option>
          <option value={department} onChange={departmentChangeHandler}>Option2</option>
          <option value={department} onChange={departmentChangeHandler}>Option3</option>
          <option value={department} onChange={departmentChangeHandler}>Option4</option>
        </select> */}

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
          <input type="date" value={dateofbirth} onChange={dateofbirthChangeHandler}  placeholder="Date of Birth" required /></div>
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

        <button type='submit' className="btn solid">Add Employee</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className="btn solid" onClick={() => cancelHandler()}>Cancel</button>
      </form>

    </div>

  );
}
export default AddEmployee;
