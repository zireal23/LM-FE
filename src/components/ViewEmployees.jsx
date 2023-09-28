import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";


const ViewEmployees= () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchEmployees";
  const[employees, setEmployees] = useState([]);

  const setEmployeeData = () => {
    axios.get(baseURL ).then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      // alert("Error Ocurred while loading data:" + error);
      navigate('/error');
    });
  }

  useEffect(() => {
    setEmployeeData();
  }, []);

  return (
    <div className="card-body">
      <br>
      </br>
        
      


      <br></br>
      <div className="col-md-6">
      <div className='employee-view'>
        <h3 >Employees List</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
            {employees.length === 0 ? (
                <p>No employees to be shown</p>
              ) : (<table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Date of Birth</th>
                  <th>Date of Joining</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Employee Name</th>
                  <th>Gender</th>
                  
                  <th scope="col">Action</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>

                {
                  
                  employees.map((employee, index) => (

                    <tr className='viewAllLoansTableContents'>
                      <th scope="row">{employee.employeeId}</th>

                      <td>{employee.dateofbirth}</td>
                      <td>{employee.dateofjoining}</td>
                      <td>{employee.department}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.employeeName}</td>
                      <td>{employee.gender}</td>

                      
                      <td><Link to={`/edit/${employee.employeeId}`} className='edit-link' >Edit
                      </Link></td>
                      
                      <td><Link to={`/delete/${employee.employeeId}`} className='delete-link'>Delete
                      </Link></td>                      

                    </tr>

                  ))
                }

              </tbody>
            </table>)}
            <div className='viewAllLoansButtonDiv'>
              <button className='viewAllLoansButton' onClick={() => navigate("/create")}>
                  Create New Employee
              </button>
            </div>
              

            </div>
          </div>
        </div>
        
      </div>

    </div>

  );
}
export default ViewEmployees;