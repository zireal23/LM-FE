import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock, FaIdCard, FaDesktop, FaDeskpro, FaMale, FaCalendar } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { Toast } from 'react-bootstrap';

const AddEmployee = () => {
  const navigate = useNavigate();
  const baseURL = 'http://localhost:7000/saveEmployee';
  const [employeeId, setId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');
  const [dateofjoining, setDateofjoining] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [duration, setDuration] = useState('');
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!employeeId) {
      newErrors.employeeId = 'Employee ID is required';
      isValid = false;
    }

    if(employeeName&&/\d/.test(employeeName)){
      isValid = false;
      newErrors.employeeName = "EmployeeName cannot have number or special characters"
  }

    if(department&&/\d/.test(department)){
        isValid = false;
        newErrors.department = "Department cannot have number or special characters"
    }

    if(designation&&/\d/.test(designation)){
      isValid = false;
      newErrors.designation = "Designation cannot have number or special characters"
  }

  if((gender&&/\d/.test(gender))||gender.length>1){
    isValid = false;
    newErrors.gender = "Gender cannot have number or special characters and should be of one character only"
}

    if (!dateofbirth) {
      newErrors.dateofbirth = 'Date of Birth is required';
      isValid = false;
    }

    if (!dateofjoining) {
      newErrors.dateofjoining = 'Date of Joining is required';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const employeeIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const employeeNameChangeHandler = (event) => {
    setEmployeeName(event.target.value);
  };

  const departmentChangeHandler = (event) => {
    setDepartment(event.target.value);
  };
  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
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

    if (validateForm()) {
      axios
        .post(baseURL, {
          employeeId: employeeId,
          employeeName: employeeName,
          department: department,
          designation: designation,
          gender: gender,
          dateofbirth: dateofbirth,
          dateofjoining: dateofjoining,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          alert('Employee ' + employeeName + ' added!');
          setShowToastSuccess(true)
          setToastMessage("Employee added successfully")
          navigate('/viewemployees');
        })
        .catch((error) => {
          setShowToastFail(true);
          setToastMessage("Employee addition failed");
        });
    } 
  };

  const cancelHandler = () => {
    setId('');
    setEmployeeName('');
    setDesignation('');
    setDepartment('');
    setGender('');
    setdateofbirth('');
    setDateofjoining('');
    setPassword('');
  };

  return (
    <div className='addEmployee'>
      <form onSubmit={submitActionHandler}>
        <h2 className='title'>Add Employee</h2>

        <div className='input-field'>
          <i className='fas fa-id-card-o'>
            <FaIdCard style={{ color: '#121212' }} />
          </i>
          <input type='text' value={employeeId} onChange={employeeIdChangeHandler} placeholder='Employee ID' required />
          <span className='error'>{errors.employeeId}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-user'>
            <FaUser style={{ color: '#121212' }} />
          </i>
          <input
            type='text'
            value={employeeName}
            onChange={employeeNameChangeHandler}
            placeholder='Employee Name'
            required
          />
          <span className='error'>{errors.employeeName}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-desktop'>
            <FaDesktop style={{ color: '#121212' }} />
          </i>
          <input
            type='text'
            value={department}
            onChange={departmentChangeHandler}
            placeholder='Department'
            required
          />
          <span className='error'>{errors.department}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-deskpro'>
            <FaDeskpro style={{ color: '#121212' }} />
          </i>
          <input
            type='text'
            value={designation}
            onChange={designationChangeHandler}
            placeholder='Designation'
            required
          />
          <span className='error'>{errors.designation}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-male'>
            <FaMale style={{ color: '#121212' }} />
          </i>
          <input type='text' value={gender} onChange={genderChangeHandler} placeholder='Gender' required />
          <span className='error'>{errors.gender}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-calendar'>
            <FaCalendar style={{ color: '#121212' }} />
          </i>
          <input type='date' value={dateofbirth} onChange={dateofbirthChangeHandler} required />
          <span className='error'>{errors.dateofbirth}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-calendar'>
            <FaCalendar style={{ color: '#121212' }} />
          </i>
          <input type='date' value={dateofjoining} onChange={dateofjoiningChangeHandler} required />
          <span className='error'>{errors.dateofjoining}</span>
        </div>

        <div className='input-field'>
          <i className='fas fa-lock'>
            <FaLock style={{ color: '#121212' }} />
          </i>
          <input type='password' value={password} onChange={passwordChangeHandler} placeholder='Password' required />
          <span className='error'>{errors.password}</span>
        </div>

        <button type='submit' className='btn solid'>
          Add Employee
        </button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' className='btn solid' onClick={() => cancelHandler()}>
          Cancel
        </button>
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
};

export default AddEmployee;
