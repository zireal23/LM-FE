import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddEmployee = () => {
  const baseURL = "http://localhost:9080/saveStudent";
  const navigate = useNavigate();
  const [employeeId, setId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const[department,setDepartment]=useState('');
  const[designation,setDeisgnation]=useState('');
  const[gender,setGender]=useState('');
  const[dob,setDob]=useState('');
  const[doj,setDoj]=useState('');


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
    setDeisgnation(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setDob(event.target.value);
  };
  const dojChangeHandler = (event) => {
    setDoj(event.target.value);
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
        dob:dob,
        doj:doj

      })
      .then((response) => {
        alert(response.data.employeeName);
        alert("Employee "+ employeeName +" added!");
        //navigate("/account");
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setId('');
    setEmployeeName('');
    setDeisgnation('');
    setDepartment('');
    setGender('');
    setDob('');
    setDoj('');
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
        Designation:
        <input type="text" value={designation} onChange={designationChangeHandler} placeholder="Enter designation" required/><br></br>
        Gender:
        <input type="text" value={gender} onChange={genderChangeHandler} placeholder="Enter gender" required/><br></br>
        DOB:
        <input type="text" value={dob} onChange={dobChangeHandler} placeholder="Enter dob" required/><br></br>
        DOJ:
        <input type="text" value={doj} onChange={dojChangeHandler} placeholder="Enter doj" required/><br></br>
        <br></br>
        <button type='submit'>Add Employee</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Cancel</button>
      </form>

    
    
    );
}
export default AddEmployee;