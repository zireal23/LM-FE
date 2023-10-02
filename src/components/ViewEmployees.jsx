import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// import { CompactTable } from '@table-library/react-table-library/compact';
// import { useTheme } from '@table-library/react-table-library/theme';
// import { getTheme } from '@table-library/react-table-library/baseline';
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";


const ViewEmployees= () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/fetchEmployees";
  const[employees, setEmployees] = useState([]);
  const [nodes,setNodes] = useState([]);
  const [columns,setColumns] = useState([]);

  const converTableData = (employees) => {
    const employeeArray = [];
    const columnsArray = [
      {label: "Employee ID", renderCell: (item)=>item.employeeId},
      {label: "Date of Birth", renderCell: (item)=>item.dateofbirth},
      {label: "Date of Joining", renderCell: (item)=>item.dateofjoining},
      {label: "Department", renderCell: (item)=>item.department},
      {label: "Designation", renderCell: (item)=>item.designation},
      {label: "Employee Name", renderCell: (item)=>item.employeeName},
      {label: "Gender", renderCell: (item)=>item.gender},

    ];
      for(const employee of employees){
          employeeArray.push({
            employeeId: employee.employeeId,
            dateofbirth: employee.dateofbirth,
            dateofjoining: employee.dateofjoining,
            department: employee.department,
            designation: employee.designation,
            name: employee.employeeName,
            gender: employee.gender
          })
      }
      setNodes([...nodes,employeeArray]);
      setColumns([...columns, columnsArray]);


  }

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
    <div className="tablecontainer">
      <h3 className="tableheading">Employees List</h3>
      <div className="table table-responsive table-dark table-borderless">
      {employees.length === 0 ? (
                <p className='noItemsToView'>No employees to be shown</p>
              ) : (<table className="employeetable">
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

                      
                      <td><Link to={`/edit/${employee.employeeId}`} className='edit-link' ><button className='loginButton transparent'>Edit</button>
                      </Link></td>
                      
                      <td><Link to={`/delete/${employee.employeeId}`} className='delete-link'><button className='loginButton transparent'>Delete</button>
                      </Link></td>                      

                    </tr>

                  ))
                }

              </tbody>
            </table>)}
      </div>
      
      <div className='viewAllLoansButtonDiv'>
              <button className='viewAllLoansButton' onClick={() => navigate("/create")}>
                  Create New Employee
              </button>
      </div>
      
      <div className="adminredirect" onClick={() => navigate("/admindashboard")}>
          &lt; &lt; Go to admin dashboard
      </div>

      </div>

      


  );
}
export default ViewEmployees;