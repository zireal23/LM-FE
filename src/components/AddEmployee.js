import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './AddEmployee.css'
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddEmployee = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/saveEmployee";
  const [employeeId, setId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const[department,setDepartment]=useState('');
  const[designation,setDesignation]=useState('');
  const[gender,setGender]=useState('');
  const[dateofbirth,setdateofbirth]=useState('');
  const[dateofjoining,setDateofjoining]=useState('');
  const[password,setPassword]=useState('');


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
        department:department,
        designation:designation,
        gender: gender,
        dateofbirth:dateofbirth,
        dateofjoining:dateofjoining,
        password: password
      })
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        alert("Employee "+ employeeName +" added!");
        navigate("/viewemployees");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
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
    return(
      
      
      <form onSubmit={submitActionHandler}>
        
            Employee ID:
            <input type="text" value={employeeId} onChange={employeeIdChangeHandler} placeholder="Enter Employee ID" required/><br></br>
        
            Employee Name :
        <input type="text" value={employeeName} onChange={employeeNameChangeHandler} placeholder="Enter name" required/><br></br>
        Department:
        <input type="text" value={department} onChange={departmentChangeHandler} placeholder="Enter department" required/><br></br> 
         {/* <select>
          <option value={department} onChange={departmentChangeHandler}>Option1</option>
          <option value={department} onChange={departmentChangeHandler}>Option2</option>
          <option value={department} onChange={departmentChangeHandler}>Option3</option>
          <option value={department} onChange={departmentChangeHandler}>Option4</option>
        </select> */}
        Designation:
        <input type="text" value={designation} onChange={designationChangeHandler} placeholder="Enter designation" required/><br></br>
        Gender:
        <input type="text" value={gender} onChange={genderChangeHandler} placeholder="Enter gender" required/><br></br>
        Date of Birth:
        <input type="date" value={dateofbirth} onChange={dateofbirthChangeHandler} placeholder="Enter Date of Birth" required/><br></br>
        Date of Joining:
        <input type="date" value={dateofjoining} onChange={dateofjoiningChangeHandler} placeholder="Enter Date of Joining" required/><br></br>
        Enter Password:
        <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password" required/><br></br>
        <br></br>
        <button type='submit'>Add Employee</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Cancel</button> 
      </form>

    
    
    );
}
export default AddEmployee;
