import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
import "../App.css";
import "./ViewEmployees.css";


const ViewEmployees= () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchEmployees";
  const[employees, setEmployees] = useState([]);

  const setEmployeeData = () => {
    axios.get(baseURL ).then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setEmployeeData();
  }, []);

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Employee
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Employees List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
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

                      <tr>
                        <th scope="row">{employee.employeeId}</th>

                        <td>{employee.dateofbirth}</td>
                        <td>{employee.dateofjoining}</td>
                        <td>{employee.department}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.employeeName}</td>
                        <td>{employee.gender}</td>
                        <td><Link to={"/edit/" + employee.employeeid}>Edit
                        </Link></td>
                        <td><Link to={"/delete/" + employee.employeeid}>Delete
                        </Link></td>


                        <td >
                        

    
    


                       
                       

                      </td>
                          


                          

                        
                      </tr>

                    ))
                  }

                </tbody>
              </table>


              {/* <select >
              {
              students.map((s, index) => (
              <option key={s.regno} value={s.regno}>{s.name}</option>
                   
                  
                ))
                  }
              </select> */}

            </div>
          </div>
        </div>
        
      </div>

    </div>

  );
}
export default ViewEmployees;